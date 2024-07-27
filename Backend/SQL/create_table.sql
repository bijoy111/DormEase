create table student (
    stu_id int primary key,
    name varchar(255),
    dept varchar(255),
    level_term varchar(5),
    email varchar(255),
    password varchar(255),
    room_no int default null,
    hall varchar(255),
    resident_status boolean default false,
    phone_no varchar(15),
    photo varchar(255) default 'default.jpg',
);

create table room_allot_applicant (
    stu_id int,
    home_district varchar(255),
    school varchar(255),
    college varchar(255),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table room_change_applicant (
    stu_id int,
    prev_room_no int,
    new_room_no int,
    reason varchar(255),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table admin (
    admin_id int primary key,
    password varchar(255),
    role varchar(255)
);

create table complaint (
    complaint_id int primary key auto_increment,
    stu_id int,
    title varchar(255),
    description varchar(255),
    created_at timestamp default current_timestamp,
    last_modified timestamp default current_timestamp on update current_timestamp,
    status varchar(255),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table post (
    post_id int primary key auto_increment,
    title varchar(255),
    description varchar(255),
    created_at timestamp default current_timestamp,
);

create table student_post (
    post_id int,
    stu_id int,
    primary key (post_id, stu_id),
    foreign key (post_id) references post(post_id) on delete cascade on update cascade,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table notice (
    notice_id int,
    foreign key (notice_id) references post(post_id) on delete cascade on update cascade
);

create table private_notice (
    notice_id int,
    stu_id int,
    primary key (notice_id, stu_id),
    foreign key (notice_id) references notice(notice_id) on delete cascade on update cascade,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table comment (
    comment_id int primary key auto_increment,
    post_id int,
    stu_id int,
    description varchar(255),
    created_at timestamp default current_timestamp,
    foreign key (post_id) references post(post_id) on delete cascade on update cascade,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table post_vote (
    post_id int,
    stu_id int,
    vote boolean,
    primary key (post_id, stu_id),
    foreign key (post_id) references post(post_id) on delete cascade on update cascade,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table comment_vote (
    comment_id int,
    stu_id int,
    vote boolean,
    primary key (comment_id, stu_id),
    foreign key (comment_id) references comment(comment_id) on delete cascade on update cascade,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table dining_menu (
    date date,
    lunch varchar(255),
    dinner varchar(255),
    special boolean default false
);

create table dining_entry (
    menu_id int,
    stu_id int,
    date date,
    lunch boolean,
    dinner boolean,
    primary key (menu_id, stu_id),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade,
    foreign key (menu_id) references dining_menu(menu_id) on delete cascade on update cascade
);

create table dining_fund (
    fund_id int primary key,
    date date,
    "from" varchar(255),
    "to" varchar(255),
    amount int
);

create table notification (
    notification_id int primary key,
    stu_id int,
    description varchar(255),
    created_at timestamp default current_timestamp,
    read boolean default false,
    link varchar(255),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table mess_manager_applicant (
    applicant_id int primary key auto_increment,
    stu_id int,
    primary key (applicant_id, stu_id),
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table mess_manager (
    stu_id int,
    foreign key (stu_id) references student(stu_id) on delete cascade on update cascade
);

create table media (
    media_id int primary key auto_increment,
    post_id int,
    link varchar(255),
    foreign key (post_id) references post(post_id) on delete cascade on update cascade
);