Create Table cohorts (
id serial PRIMARY KEY, 
name varchar, 
start_data date,
end_date date
);

Create Table students (
id Serial PRIMARY KEY,
cohort_id int REFERENCES cohorts(id)
name varchar,
email varchar,
phone varchar(9),
github varchar,
start_data date,
end_date date
);