export const codesByUser = {
    "Billy": "sour-gummies",
    "Stevie": "contained-relevance",
    "Kevin": "excellent-warthog",
    "Molly": "seventy-forest",
    "Cassie": "milk-choc-chum",
    "Mary Therese": "restful-train",
    "Elizabeth": "expert-nightowl",
    "Aydin": "released-alligator",
};

export const usersByCode = Object.keys(codesByUser).reduce((acc, k)=>{
        acc[codesByUser[k]] = k;
        return acc;
}, {});

