# :bulb: Sora Module Tips, Tricks & Troubleshooting

Welcome! This page will help you build, debug, and polish your Sora modules. Whether you’re new or experienced, you’ll find practical advice and solutions to common problems. :rocket:

## :white_check_mark: Best Practices

Follow these habits to make your modules reliable and easy to maintain:

- Use **try/catch** blocks to handle errors gracefully and avoid crashes.
- Always return data in the expected format (see the docs for each function).
- Use `encodeURIComponent` for user input in URLs to prevent bugs with special characters.
- Test your module with real data before publishing.
- Log errors with `console.log` for easier debugging.

## :star: Pro Tips

Take your modules to the next level:

- Use the [Global Extractor](https://github.com/JMcrafter26/sora-global-extractor) to support many providers with less effort.
- Check out the [Module Library](https://library.cufiy.net) for real-world examples and inspiration.
- Use [Node.js](https://nodejs.org/) for local testing and development.
- use [LemmeDebug UserScript](https://greasyfork.org/en/scripts/537775-lemmedebug) to debug the source website and see the requests made by the website.
- Check out the [Regex101 site](https://regex101.com/) for testing and debugging your regular expressions (we all know regex can be tricky!).

## :mag: Troubleshooting

Run into issues? Here’s what to check first:

**Nothing shows up in Sora?**
- Check your function names and return formats.
- Make sure your script is accessible at the `scriptUrl` in your module JSON.
- Ensure your manifest JSON is valid and all required fields are present.

**Errors in the Console?**
- Use `console.log` to debug and check for typos or network issues.
- Sora does **not** support multiple arguments in `console.log`. Combine them into a single string using `+`.
- Double-check your API URLs and endpoints.

## :warning: Common Pitfalls

Avoid these mistakes for a smoother experience:

- Returning episode numbers as strings instead of numbers. Use `parseInt(number)` if needed.
- Not stringifying JSON arrays/objects before returning them. Use `JSON.stringify()`.
- Forgetting to use `encodeURIComponent` for user input in URLs.
- Using multiple arguments in `console.log` (combine with `+` instead).

## :hammer_and_wrench: More Tips

- Always use **try/catch** blocks to handle errors gracefully.
- Test your module with real data before publishing.
- Log errors to help with debugging.
- Check out the [Global Extractor](https://github.com/JMcrafter26/sora-global-extractor) for easier provider integration.

## :question: Need More Help?

If you’re stuck or want to learn more:

- Ask for help in the [Sora Community Discord](https://go.jm26.net/sora-discord)
- Read the [full documentation](https://sora.jm26.net/docs/) for more guides and references.
- Browse the [Module Library](https://library.cufiy.net) for more examples and inspiration.

Happy coding! :tada:
