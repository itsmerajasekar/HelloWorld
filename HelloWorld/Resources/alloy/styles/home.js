module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "Window",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "imageView",
    style: {
        image: "/apple_logo.jpg",
        width: 24,
        height: 24,
        top: 100
    }
} ];