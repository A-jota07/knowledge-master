module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c 
                WHERE "parentId" = subgategories.id
        )
        SELECT id FROM subcategories
    `
}