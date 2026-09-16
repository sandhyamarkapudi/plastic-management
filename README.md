# Generating Awareness on Plastic Management among Rural People

A simple, mobile-friendly college-level full-stack application that teaches plastic reduction, segregation, reuse, recycling and responsible disposal. The interface supports English and Telugu labels and uses a Node.js/Express API with MySQL.

## Features

- Responsive Bootstrap 5 learning pages for plastic types, segregation, reuse, recycling and do's/don'ts.
- Ten-question quiz with score, percentage and stored results.
- User registration and login using bcryptjs-hashed passwords and JWT.
- Feedback form stored in MySQL.
- Protected admin login, dashboard, content management, quiz view, users and feedback views.
- REST APIs with parameterized MySQL queries, validation, CORS and role authorization.
- Awareness content can be filtered by language with `GET /api/content?language=te`.

## Technologies

HTML5, CSS3, JavaScript, Bootstrap 5, Node.js, Express.js, MySQL, mysql2, bcryptjs, jsonwebtoken, CORS and dotenv.

## Folder structure

- `frontend/`: public pages, admin pages, CSS and browser JavaScript.
- `backend/`: Express server, MVC controllers/models/routes and middleware.
- `database/schema.sql`: database, tables, indexes, constraints and starter quiz questions.

## MySQL setup

1. Install and start MySQL.
2. Open a MySQL client and run `database/schema.sql`.
3. The script creates the `plastic_awareness` database and all required tables.

The schema includes `users`, `awareness_content`, `quiz_questions`, `quiz_results` and `feedback`. Foreign keys and indexes are included. Quiz results allow a nullable user ID so a learner can take the quiz without logging in.

## Environment variables

Create `.env` in this project root (beside `package.json`) by copying `.env.example`:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=plastic_awareness
JWT_SECRET=replace_with_a_long_random_secret
CORS_ORIGIN=http://localhost:5500
```

Use a long private value for `JWT_SECRET`. Do not commit real credentials.
The backend also accepts the existing `backend/.env` temporarily, but the root `.env` is the recommended location.

## Install and run

```powershell
npm.cmd run install:backend
npm.cmd start
```

The backend verifies the MySQL connection before it starts listening. It serves the frontend from the same project at `http://localhost:5000`; open `http://localhost:5000/index.html`.

For a separate frontend server, keep the backend running in one terminal and run this from the project root in another:

```powershell
npm.cmd run frontend
```

Then open `http://localhost:5500`. The frontend uses `http://localhost:5000/api` by default.

### After reopening VS Code

1. Reopen this project folder in VS Code.
2. Start MySQL and confirm the database was initialized with `database/schema.sql`.
3. Run `npm.cmd start` from the project root. Use `npm.cmd run frontend` too only when using the separate frontend server.
4. Open `http://localhost:5000/index.html` or `http://localhost:5500`.

Closing VS Code does not remove project files. Dependencies remain in `backend/node_modules`; if they are missing, run `npm.cmd run install:backend` again.

## Create the first admin

After importing the schema and configuring `.env`, run:

```powershell
npm.cmd --prefix backend exec node create-admin.js 9999999999 Administrator Village "Your District" admin123
```

Then open `frontend/admin/login.html` or `http://localhost:5000/admin/login.html`. Change the example password for real use.

## Test the application

1. Open the home page and follow the learning navigation.
2. Register from `register.html` with a 10-15 digit mobile number and a password of at least six characters.
3. Log in from `login.html`; the API returns a JWT and stores it in browser local storage.
4. Open the quiz, answer all ten questions and submit. The result is inserted into `quiz_results`.
5. Submit feedback from `feedback.html`; check the `feedback` table or the admin feedback page.
6. Log in at the admin page and verify dashboard counts, registered users and feedback.
7. Add an awareness item at `admin/content.html`; it will appear in `awareness.html` when the API is available.

## API documentation

### Users

- `POST /api/users/register` with `name`, `mobile`, `village`, `district`, `password`.
- `POST /api/users/login` with `mobile`, `password`.
- `GET /api/users/:id` with a Bearer token.

### Awareness content

- `GET /api/content` and `GET /api/content/:id` are public.
- `POST /api/content`, `PUT /api/content/:id` and `DELETE /api/content/:id` require an admin Bearer token.

### Quiz

- `GET /api/quiz` is public and omits correct answers.
- `POST /api/quiz/submit` accepts `{ "answers": { "1": "a" } }` and stores the result.
- `POST /api/quiz/questions`, `PUT /api/quiz/questions/:id` and `DELETE /api/quiz/questions/:id` require admin authorization.

### Feedback and admin

- `POST /api/feedback` accepts `user_name`, `village`, `district`, `rating`, `message`.
- `GET /api/feedback`, `GET /api/admin/dashboard` and `GET /api/admin/users` require admin authorization.
- `GET /api/health` is a public server health check.

## Testing notes

The backend entry point can be syntax-checked with `node --check server.js`. Functional tests require a running MySQL instance with the schema loaded. For production, add HTTPS, stricter CORS, rate limiting, CSRF protection appropriate to the chosen token storage, and server-side logging/monitoring.
