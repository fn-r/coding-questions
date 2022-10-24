SELECT *, companies.name AS company_name FROM companies
JOIN products
ON company_id = companies.id