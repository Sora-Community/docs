---
next: false
---

# :package: Distributing Your Sora Module

Once you've created and tested your Sora module, it's time to share it with the world! This guide will walk you through the steps to distribute your module effectively. :rocket:

## :page_facing_up: Preparing Your Module

Before you publish your module, make sure it meets the following criteria:
- **Manifest JSON**: Ensure your `module.json` file is complete and follows the required structure.
- **JavaScript Functions**: Implement all required functions (`searchResults`, `extractDetails`, `extractEpisodes`, `extractStreamUrl`) and ensure they return data in the expected format.
- **Testing**: Thoroughly test your module in the Sora app to ensure it works as expected. Check for errors in the console and fix any issues.

## :arrow_up: Host Your Module

Once your module is ready, you can host it on a web server or a cloud platform. This will make it accessible to users and the Sora app.

We will show you how to host your module on GitHub, but you can use any hosting service that supports static files.

### Hosting on GitHub

1. Create a new repository on GitHub.
2. Upload your module files (including `module.json` and JavaScript files) to the repository.

Following repository structure is recommended:
```
├── README.md
├── MyModule
│   ├── module.json
│   └── script.js
├── AnotherModule
│   ├── module.json
│   └── script.js
└── ...
```

3. Make sure your `module.json` file has the correct `scriptUrl` pointing to the JavaScript file in your repository.  
> Important: You need to use the raw URL of the file. The url needs to look like this:
> `https://raw.githubusercontent.com/yourusername/yourrepository/main/MyModule/script.js`
4. Commit your changes and push them to the main branch.
5. Your module is now hosted! To add it to Sora, you need to provide the *raw* URL of your `module.json` file.

### Hosting on Other Platforms
You can also host your module on other platforms like Vercel, Netlify, or any static file hosting service. Just make sure the `module.json` and JavaScript files are accessible via a raw URL.

## :link: Adding Your Module to Sora

1. Open the Sora app and go to the "Modules" section.
2. Click on `+` and paste the **raw** URL of your `module.json` file.
3. Click "Add" to add your module to Sora.

## :rocket: Publishing Your Module to the Module Library

Once your module is added to Sora, you can publish it to the Module Library for others to use.

> **[View the Module Library](https://library.cufiy.net)**

::: tip Note
Currently, modules can only be added to the Module Library by the Sora team. If you want to add your module, please join the [Sora Community Discord](https://go.jm26.net/sora-discord) and ask for help.

This way you will also get the `Module Creator` role, which will give you access to special channels for module creators.
:::

## :speech_balloon: Get Feedback and Improve

Once your module is published, gather feedback from users to identify areas for improvement. Consider the following strategies:

- Encourage users to report bugs or request features in the Sora Community Discord.
- Regularly update your module based on user feedback and changing requirements.

By actively seeking feedback and making improvements, you can ensure your module remains valuable and relevant to the Sora community.

## :question: Need Help?
If you’re stuck or want to learn more:

- Ask for help in the [Sora Community Discord](https://go.jm26.net/sora-discord)
- Read the [full documentation](https://sora.jm26.net/docs/) for more guides and references.
- Browse the [Module Library](https://library.cufiy.net) for more examples and inspiration.

Happy coding! :tada: