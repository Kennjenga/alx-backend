# Learning Objectives

## Learn how to parametrize Flask templates to display different languages

- Understand how to use Flask-Babel to add translations to your Flask application. This involves setting up Flask-Babel and configuring it to work with your Flask app.
- Learn how to create and manage translation files. You will generate `.po` files for different languages and compile them into `.mo` files.
- Implement language selection based on user preferences or application settings. This includes providing a way for users to select their preferred language and storing this preference.

## Learn how to infer the correct locale based on URL parameters, user settings or request headers

- Explore different methods to determine the user's locale. This can be done through URL parameters, user settings, or request headers.
- Implement locale detection using URL parameters. Modify your Flask routes to include language codes and adjust the application behavior accordingly.
- Use request headers to infer the user's preferred language. Extract language preferences from the `Accept-Language` header in HTTP requests.
- Store and retrieve user language preferences from user settings. Save the user's language choice in a database or session and retrieve it when needed.

## Learn how to localize timestamps

- Understand the importance of time zone awareness in web applications. Recognize how different time zones affect the display and storage of timestamps.
- Use the `pytz` library to handle time zone conversions. Convert timestamps to the appropriate time zone based on user preferences or application settings.
- Implement timestamp localization in Flask using Flask-Babel. Format and display timestamps in the user's local time zone using Flask-Babel's localization features.

# Resources

- [Flask-Babel](https://pythonhosted.org/Flask-Babel/)
- [Flask i18n tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xiii-i18n-and-l10n)
- [pytz](https://pypi.org/project/pytz/)
