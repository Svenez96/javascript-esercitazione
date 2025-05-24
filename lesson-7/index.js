const API_URL = "https://jsonplaceholder.typicode.com/posts";

const $prevBtn = document.querySelector("#prev");
const $pageInfo = document.querySelector("#page-info");
const $nextBtn = document.querySelector("#next");
const $dataTbody = document.querySelector("#data");
const $limitSelect = document.querySelector("#limit");
const $sortingSelect = document.querySelector("#sorting");
const $searchInput = document.querySelector("#search");

const state = {
    data: [], // Copia di rendering
    cache: [], // Copia di cache
    paginationInfo: {
        page: 1,
        limit: 10,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    },
    sortingInfo: {
        by: "id",
        mode: "ASC"
    },
    search: {
        query: null,
    }
}

const searchData = (data) => {
    if (state.search.query == null) return data;

    return data.filter((item) => {
        const regexp = new RegExp(state.search.query, "ig"); 

        return Object.values(item).some((value) => value.toString().match(regexp));
    });
}

const sortingData = {
    ASC: (data) => {
        if (data.length === 0) return data;

        const is_numeric = typeof data[0][state.sortingInfo.by] === "number"; // true se numero - false

        if (is_numeric) {
            return data.sort((a, b) => a[state.sortingInfo.by] - b[state.sortingInfo.by]);
        } else {
            return data.sort((a, b) => a[state.sortingInfo.by].localeCompare(b[state.sortingInfo.by]));
        }
    },
    DESC: (data) => {
        if (data.length === 0) return data;

        const is_numeric = typeof data[0][state.sortingInfo.by] === "number"; // true se numero - false

        if (is_numeric) {
            return data.sort((a, b) => b[state.sortingInfo.by] - a[state.sortingInfo.by]);
        } else {
            return data.sort((a, b) => b[state.sortingInfo.by].localeCompare(a[state.sortingInfo.by]));
        }
    },
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
        });

        if (!response.ok) throw new Error("Internal Server Error");

        state.cache = await response.json();
    } catch (error) {
        console.log(error)
    }
}

const paginateData = () => {
    const data = searchData([...state.cache]);
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);
    // 1 -> 10 * (1 - 1) = 0;
    // 2 -> 10 * (2 - 1) = 10;
    // 3 -> 10 * (3 - 1) = 20;
    // ...
    state.paginationInfo.totalPages = Math.ceil(data.length / state.paginationInfo.limit);
    state.paginationInfo.totalPages = state.paginationInfo.totalPages == 0 ? 1 : state.paginationInfo.totalPages;
    state.data = sortingData[state.sortingInfo.mode](data).splice(startIndex, state.paginationInfo.limit);
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage = state.paginationInfo.page < state.paginationInfo.totalPages;
}

const renderEmptyData = () => {
    const HTML = `<tr>
        <td colspan="${Object.keys(state.cache[0]).length}" style="text-align: center;">No data found...</td>
    </tr>`;

    $dataTbody.innerHTML = HTML;
}

const renderPaginationActions = () => {
    $pageInfo.innerHTML = `${state.paginationInfo.page} / ${state.paginationInfo.totalPages}`; // Page 1 of 10

    if (state.paginationInfo.hasPrevPage) {
        $prevBtn.removeAttribute("disabled");
    } else {
        $prevBtn.setAttribute("disabled", true);
    }
    
    if (state.paginationInfo.hasNextPage) {
        $nextBtn.removeAttribute("disabled");
    } else {
        $nextBtn.setAttribute("disabled", true);
    }
}

const render = () => {
    if (state.data.length == 0) {
        renderEmptyData();
    } else {
        const HTML = state.data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>    
        `).join("");
    
        $dataTbody.innerHTML = HTML;
    }

    renderPaginationActions();
}

const manageListeners = () => {
    $prevBtn.addEventListener("click", () => {
        state.paginationInfo.page -= 1;

        paginateData();
        render();
    });
    
    $nextBtn.addEventListener("click", () => {
        state.paginationInfo.page += 1;

        paginateData();
        render();
    });

    $limitSelect.addEventListener("change", (event) => {
        state.paginationInfo.limit = event.target.value == "*" ? state.cache.length : Number(event.target.value);
        state.paginationInfo.page = 1;

        paginateData();
        render();
    });

    $sortingSelect.addEventListener("change", (event) => {
        const [by, mode] = event.target.value.split("_") // "id_ASC" -> ["id", "ASC"]

        state.sortingInfo.by = by;
        state.sortingInfo.mode = mode;

        paginateData();
        render();
    });

    $searchInput.addEventListener("input", (event) => {
        state.search.query = event.target.value != "" ? event.target.value : null;

        paginateData();
        render();
    });
}

const init = async () => {
    await fetchData();
    paginateData();
    render();
    manageListeners();
}

init();