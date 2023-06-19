create table student(Id integer primary key, Name varchar(20),Age integer,Department varchar(50),Subject varchar(10),Marks integer);

insert into student values(1,'Sri',19,'CSE','data structures',95);
insert into student values(2,'Kiru',19,'CSE','data structures',96);
insert into student values(3,'Nive',19,'CSE','data structures',98);
insert into student values(4,'Niru',19,'EEE','Basic EEE',92);
insert into student values(5,'Gokul',22,'CSE','data structures',95);
insert into student values(6,'Vijay',19,'Mech','Thermodynamics',93);
insert into student values(7,'Santhip',22,'ECE','Computer networks',89);
insert into student values(8,'Aadhi',22,'Mech','Thermodynamics',85);
insert into student values(9,'Krishna',21,'ECE','Computer networks',90);
insert into student values(10,'Kavin',18,'IT','data structures',89);

select * from student;

select count (Id) from student;
select avg(Marks) from student;
select sum(Marks) from student;

create table stdcourse(course Id integer,Name varchar(20));

insert into stdcourse values(1,'Sri');
insert into stdcourse values(1,'Sri');
insert into stdcourse values(2,'Kiru');
insert into stdcourse values(3,'Nive');
insert into stdcourse values(4,'Niru');
insert into stdcourse values(5,'Gokul');
insert into stdcourse values(6,'Vijay');
insert into stdcourse values(7,'Santhip');
insert into stdcourse values(8,'Aadhi');
insert into stdcourse values(9,'Krishna');
insert into stdcourse values(10,'Kavin');

--inner join

select stdcourse.course Id,student.Name,student.Subject from student inner join stdcourse on student.Name = stdcourse.Name;

--left join

select student.Id,student.Name,stdcourse.course Id from student Left join stdcourse on student.Name = stdcourse.Name;

--right join

select stdcourse.course Id,stdcourse.name from stdcourse left join student on student.Name = stdcourse.Name;

--outer join

select student.Name,stdcourse.course Id from student left join stdcourse on student.Name = stdcourse.Name UNION select stdcourse.course Id,stdcourse.Name from stdcourse left join student on student.Name = stdcourse.Name;




