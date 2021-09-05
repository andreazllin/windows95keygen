# windows95keygen

Windows NT 4.0 and Windows 95 Key Generator (with GUI)

[![Website](https://img.shields.io/website?label=windows95keygen&style=for-the-badge&url=https%3A%2F%2Fwindows95keygen.tk)](https://windows95keygen.tk/)

![Screenshot](https://i.imgur.com/Vr6EBW0.png)

I wanted to do something with Electron, but it didn't work out, so it's just an HTML page. I had to rewrite the generator in JavaScript from Python, nothing fancy, just rewrote the Python code with the matching JavaScript functions.

You can check out my Python version [[HERE]](https://github.com/nilaerdna/Windows95NT4KeyGenerator)

------------

## Updates

### 31/10/2020

I've updated it! Now it's also an API, you just need to make a GET request.

OEM Key `curl https://windows95keygen.tk/api/oem`

Normal Key `curl https://windows95keygen.tk/api/normal`

### 01/12/2020

I changed it from a Express.js API to a Next.js one.

It's now hosted on Vercel, the GUI version it's a little bit slow, it takes around 1s to get the response.

### 11/01/2021

It's a real Next/React app! Not just some HTML and vanilla JS pasted into it...

### 05/09/2021

You can now check/validate your keys!

You just need to send a GET request at `https://windows95keygen.tk/api/validate` with this format

```json
{ key: "YOUR KEY" }
```

------------

### Tested on

- Microsoft Windows NT 4.0 Server (4.00.1381.1)
- Microsoft Windows NT 4.0 Workstation (4.00.1381.1) [OEM]
- Microsoft Windows 95C (4.03.1216.OSR2.5) [OEM]

### How does it work?

Check out [Medium's article](https://medium.com/@dgurney/so-you-want-to-generate-license-keys-for-old-microsoft-products-a355c8bf5408) about it.

## Inspiration/Credits

- [FlyTech's Video](https://youtu.be/3DCEeASKNDk) - 🎥 Video about this topic.
- [Windows 95 UI Kit](https://github.com/themesberg/windows-95-ui-kit) - 💾 Windows 95 UI Kit made with Bootstrap 4 components.

Ended up not using this last one, but while writing my own CSS I took inspiration from it.

### This code is only for educational purposes, piracy is not okay, buy the software you are using.
