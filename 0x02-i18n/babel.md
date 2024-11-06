To parametrize your templates using the `_` or `gettext` function, follow these steps:

1. **Create a `babel.cfg` file** with the following content:

   ```ini
   [python: **.py]
   [jinja2: **/templates/**.html]
   extensions=jinja2.ext.autoescape,jinja2.ext.with_
   ```

2. **Initialize your translations** by running:

   ```sh
   $ pybabel extract -F babel.cfg -o messages.pot .
   ```

3. **Create your dictionaries** for English and French:

   ```sh
   $ pybabel init -i messages.pot -d translations -l en
   $ pybabel init -i messages.pot -d translations -l fr
   ```

4. **Edit the translation files** `translations/[en|fr]/LC_MESSAGES/messages.po` to provide the correct values for each message ID:

   - For English (`en`):

     ```po
     msgid "home_title"
     msgstr "Welcome to Holberton"

     msgid "home_header"
     msgstr "Hello world!"
     ```

   - For French (`fr`):

     ```po
     msgid "home_title"
     msgstr "Bienvenue chez Holberton"

     msgid "home_header"
     msgstr "Bonjour monde!"
     ```

5. **Compile your dictionaries** by running:

   ```sh
   $ pybabel compile -d translations
   ```

6. **Reload the home page** of your app to ensure the correct messages are displayed.

This process allows you to manage translations for your application efficiently.

![Translation Example](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/3/277f24308c856a09908c.png)

Access your app with the French locale:
http://127.0.0.1:5000/?locale=fr
