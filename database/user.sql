-- To create a new user for our database run:
CREATE USER 'username'@'localhost' IDENTIFIED BY 'a_strong_password';

-- To grant privileges run
GRANT ALL PRIVILEGES ON databaseName.* TO 'username'@'localhost';

-- Make sure to flush privileges for the changes to take effect immidiately by running:
FLUSH PRIVILEGES;