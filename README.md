
# Translator App

A simple and interactive translation web application built with React, Tailwind CSS, and MyMemory API. This app allows users to translate text between various languages. The app features a clean, user-friendly interface that leverages the power of a free translation API.

## Features

- **Multiple Language Support**: Offers translation between over 70 languages.
- **User-friendly Interface**: Clean UI with a language dropdown and character limit counter.
- **Live Translation**: Translates text dynamically as you type, with instant feedback.
- **Swap Languages**: Easily switch between the languages being translated.
- **Customizable Design**: Built with Tailwind CSS for responsiveness and easy customization.
  
## Technologies Used

- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the application with utility-first CSS.
- **MyMemory Translation API**: Used to handle translations between different languages.
- **Font Awesome**: For icons and visual elements.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/translator-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd translator-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm start
    ```

    The app will be running on `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Select the languages you want to translate from and to.
3. Enter text in the input box.
4. The app will automatically translate the text and display the translated result.
5. You can swap the translation languages by clicking the arrows between them.

## File Structure

```
/translator-app
  /src
    /components
      TranslatorApp.jsx        # Main translation component
      TranslatorStart.jsx      # Initial screen prompting user to start
    /languagesData.js          # List of supported languages with codes
    /index.css                 # Global styles
    /App.jsx                   # Main React component
  tailwind.config.js           # Tailwind CSS configuration file
  index.html                  # HTML template file
```

## Customization

- **Fonts**: You can modify the fonts used in the app by editing the `tailwind.config.js` file.
- **Languages**: Add or remove languages from the `languagesData.js` file. Each language is mapped to a unique language code.

## Contributing

We welcome contributions to improve the app! To get started:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and test them
4. Open a pull request

## License

This project is open-source and available under the [MIT License](LICENSE).
