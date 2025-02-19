# Notes App
This Notes App made using React JS and Django Rest Framework.

<br/>

## Technologies used:

Frontend:
- Frontend - `ReactJS`
- Styling - `vanilla CSS`
- `React Alert` package for showing Toast messages (frontend)
- `Redux` for managing state (frontend)
- `React Router` for routing (frontend)
- `ReactMic` for Recording audio (frontend)

Backend:
- Backend - `Django` + `Django Rest Framework`

Database:
- Database - `SQLite3`

## Description

This is a simple note taking app with Token Based Authentication. Any user can easily login/register using their `email` and `password`. After that they will be able to use this Notes App. The authenticated users will be able to do the following:

- Create a note
- Read all (and only) their notes
- Delete their own note
- Logout from their current account
- Add an audio to a note (Cannot upload mp3 audio, user must record from within the app)

A single `note` consists of the following data:

- `title` - the title of the note
- `body` - the content of the note
- `created_at` - when it was created
- `author` - who created it

## How to use it?

To do that, first:

- `git clone` or `Download ZIP` this repo `https://github.com/tituskaswii/dentalbeeAI.git`

Then setup the Backend...

# Backend Setup

To setup and start/activate the Backend API server, do the following:

- `cd notes_app/backend/backend/`

## Setting up a virtual environment using venv
- `python3 -m venv venv` will make a virtual environment
- `source venv/bin/activate` to activate the venv. (If you are on windows, then run this instead `venv\Scripts\activate.bat`)

## Installing the requirements
- `pip install -r requirements.txt` will install the needed backend project requirements

## Making migrations
- `python manage.py makemigrations`
- `python manage.py makemigrations notes users`
- `python manage.py migrate`

## Creating the super user
- `python manage.py createsuperuser` and provide the needed infos

## Starting the backend API server
- `python manage.py runserver` will start the Django API server

- At this point, if you want, you can **Login** to the pre-built admin panel by visiting- `http://localhost:8000/admin/` in your browser as the superuser account you just created. From this panel, you will be able to do almost anything to the application!

<br/>
Now our backend server is ready to accept the API requests! So let's setup the frontend...
<br/>

# Frontend Setup

Now let's run our frontend so that we can visually interact with our backend API.

- Open up another terminal and `cd notes_app/frontend/`
- `npm install` will install all the needed modules for the frontend to work
- `npm run start` to start the frontend development server
- Visit `http://localhost:3000` in your browser (normally ReactJS would do this for us)
- Login/Register and test the application!!!

