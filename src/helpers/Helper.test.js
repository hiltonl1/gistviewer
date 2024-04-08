const {getFirstFileName, getFileCount} = require('./Helper');


test('getFirstFileName', () => {
    const gist= {
        id: "e9a4107f01a0d07b6b74e992864ca034",
        files: {
            "Potential Maintainers": {
                "filename": "Potential Maintainers",
                "type": "text/plain",
                "language": null,
                "raw_url": "https://gist.githubusercontent.com/GrahamcOfBorg/e9a4107f01a0d07b6b74e992864ca034/raw/c5f14fc6305e5612091da8431e2425c29f9e9e30/Potential%20Maintainers",
                "size": 55
            }
        }
    }
  expect(getFirstFileName(gist)).toBe("Potential Maintainers");
});

test('getFileCount', () => {
    const gist= {
        id: "576bd3db4ff51e03511edf3aa9ebd377",
        files: {
            "10bit_to_8bit.py": {
                "filename": "10bit_to_8bit.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/a0e069b763f7345acb88631dd1e4a01f24d8fa25/10bit_to_8bit.py",
                "size": 1579
            },
            "cut_yuv.py": {
                "filename": "cut_yuv.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/3603ec13d26972bedb8a79d314ae92fc000ad5e3/cut_yuv.py",
                "size": 270
            },
            "view_yuv.py": {
                "filename": "view_yuv.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/sasanhb65/576bd3db4ff51e03511edf3aa9ebd377/raw/fbed6c14f4d91d114b432a4ed3221ab1de152415/view_yuv.py",
                "size": 1089
            }
        }
    }
  expect(getFileCount(gist)).toBe(3);
});