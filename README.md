# insta-package

[![npm version](https://badge.fury.io/js/insta.svg)](https://badge.fury.io/js/insta)
[![Build Status](https://travis-ci.org/gopi2401/insta-package.svg?branch=master)](https://travis-ci.org/gopi2401/insta-package)
[![GitHub license](https://img.shields.io/github/license/gopi2401/insta-package)](https://github.com/gopi2401/insta-package/blob/main/LICENSE)
[![Npm package monthly downloads](https://badgen.net/npm/dm/insta)](https://npmjs.com/package/insta)
![GitHub repo size](https://img.shields.io/github/repo-size/gopi2401/insta-package?style=flat)

<!-- [![Dependencies Status](https://david-dm.org/gopi2401/insta-package/status.svg)](https://david-dm.org/gopi2401/insta-package)
[![Dev Dependencies Status](https://david-dm.org/gopi2401/insta-package/dev-status.svg)](https://david-dm.org/gopi2401/insta-package?type=dev) -->

> This Node.js package provides a simple and efficient way to download media from Instagram. Whether you need to download images, videos, or stories, this package makes it easy with minimal setup. Designed for developers, this package supports various media formats and ensures quick downloads, making it perfect for both personal use and larger projects. With straightforward API calls, you can integrate Instagram media downloading functionality into your applications effortlessly.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation:

To install the package, run:

```bash
npm install insta-package
```

or

```bash
npm i insta-package
```

## Usage

To use the `insta-package` package, follow the example below. This package allows you to fetch data from Instagram posts.

### Example

```javascript
const insta = require("insta-package");

async function test(url) {
  try {
    const result = await insta(url);
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

test("https://www.instagram.com/reel/C9HytkYS4Hc/?utm_source=ig_web_copy_link");
```

### Output

The `result` object contains the data fetched from the Instagram post. You can adjust the code to process this data as needed.

```json
{
  "video": [
    {
      "video": "https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An9VukWeVHPYEj_QoBTxvf0tfXakKJyWBnztDeTFbQnOgu4XVsGh1Y4xi8ucjLzRFEqnQXom7sn5MSlr01mZbWN3.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuMTA4MC5iYXNlbGluZSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&vs=497431829473320_3124900975&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQXZCQlJRTXI0ZThmc0FDQUhwU212emZpdTU5YnBSMUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBVFAwQnBUU1J0S21NZ0NBSHFCM0hWajJtNEVicV9FQUFBRhUCAsgBACgAGAAbABUAACb%2B7dzD24aXQRUCKAJDMywXQDuQ5WBBiTcYFmRhc2hfYmFzZWxpbmVfMTA4MHBfdjERAHX%2BBwA%3D&_nc_rid=5c862724ed&ccb=9-4&oh=00_AYCg7DV04LknbzJ_Y09ehpcdqt3Jl9gykX2lFieJAjWUJg&oe=668D6CE5&_nc_sid=10d13b",       
      "thumbnail": "https://scontent.cdninstagram.com/v/t51.29350-15/450258777_1528082971118106_3162685055130347958_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=P2DVaf_sZ0IQ7kNvgFSmczi&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYC7b5Dib4CyVhX_h6D1Tb8hZSuKD0fbAfcNcvN78enfaA&oe=66916EA3&_nc_sid=10d13b"
    }
  ]
}
```

## Features

- [x] Instagram media download link

## Contributing

All kinds of contributions are welcome - code, tests, documentation, bug reports, new features, etc...

- Send feedbacks.
- Submit bug reports.
- Write/Edit the documents.
- Fix bugs or add new features.

<!-- ## Security

For information on reporting security vulnerabilities in Node.js, see
[SECURITY.md](./SECURITY.md). -->

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/gopi2401/insta-package/blob/HEAD/LICENSE) file for details.

<!-- [Code of Conduct]: https://github.com/nodejs/admin/blob/HEAD/CODE_OF_CONDUCT.md
[Contributing to the project]: CONTRIBUTING.md
[website]: https://nodejs.org/ -->
