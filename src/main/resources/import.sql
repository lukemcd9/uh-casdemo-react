
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (1, 'Y', 1, 'Welcome to the University of Hawai''i CAS Demonstration application. The site includes source code that shows you how to use the UH CAS service.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (2, 'Y', 1, 'University of Hawaii Information Technology Services resides in a state-of-the-art, six-story, 74,000-square-foot facility located on the Manoa campus.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (3, 'Y', 1, 'The access to this system is restricted.<br/>If you believe you should have access, <br/> please send an email to <a href=''mailto:duckart@hawaii.edu''>duckart@hawaii.edu</a>.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (4, 'N', 1, 'For Future Use.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (5, 'Y', 1, 'This is a place for some messaging directed at the Applicant.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (6, 'Y', 1, 'Coordinators, secretaries, administrators, chancellors, and other big potatoes.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (7, 'Y', 1, 'You are someone who is a Coordinator and an Applicant.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (8, 'Y', 1, 'Some messaging about at the Application or the process of it.');
insert into message (MSG_ID, MSG_ENABLED, MSG_TYPE_ID, MSG_TEXT) values (9, 'Y', 1, 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.');

-- Campus codes and names.
insert into campus (id, code, actual, description) values (1,  'HA', 'Y', 'Hawaii Community College');
insert into campus (id, code, actual, description) values (2,  'HI', 'Y', 'UH Hilo');
insert into campus (id, code, actual, description) values (3,  'HO', 'Y', 'Honolulu Community College');
insert into campus (id, code, actual, description) values (4,  'KA', 'Y', 'Kapiolani Community College');
insert into campus (id, code, actual, description) values (5,  'KU', 'Y', 'Kauai Community College');
insert into campus (id, code, actual, description) values (6,  'LE', 'Y', 'Leeward Community College');
insert into campus (id, code, actual, description) values (7,  'MA', 'Y', 'UH Manoa');
insert into campus (id, code, actual, description) values (8,  'MU', 'Y', 'UH Maui College');
insert into campus (id, code, actual, description) values (9,  'WI', 'Y', 'Windward Community College');
insert into campus (id, code, actual, description) values (10, 'WO', 'Y', 'UH West Oahu');
insert into campus (id, code, actual, description) values (11, 'SW', 'N', 'UH System');

ALTER TABLE campus ALTER COLUMN id RESTART WITH (SELECT MAX(id) FROM campus) + 1;

insert into role (id, role, short_description, description) values (1,  'USER',    'User',          'User');
insert into role (id, role, short_description, description) values (2,  'FACULTY', 'Faculty',       'Faculty');
insert into role (id, role, short_description, description) values (3,  'STAFF',   'Staff',         'Staff');
insert into role (id, role, short_description, description) values (99, 'ADMIN',   'Administrator', 'Administrator');
