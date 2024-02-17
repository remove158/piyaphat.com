---
title: "วิธี set default ให้ Object แบบมือโปร"
author: "piyaphat"
description: "เกล็ดความรู้เสริม Javascript"
pubDate: "Jan 27 2024"
heroImage: "/images/javascript.png"
categories: ["javascript"]
---

**เคยไหม?** ต้องการตั้งค่าเริ่มต้นให้กับตัวแปรหลายตัวใน object
วิธีดั้งเดิมนั้น เราต้องใช้ `||` เช็คทีละตัว
ทั้งยุ่งยากและอาจทำให้ลืมตั้งค่าบางตัวได้

**แต่มีวิธีที่ง่ายกว่านั้น!**

## Hot Take

> เราสามารถใช้คำสัง `Object.assign(target, source)` ในการรวม object สองตัวเข้าด้วยกันได้

## Traditional

```js
function createNewPage(options) {
    options = options || {};
    let new_option = {
        title: options.title || "Untitled",
        pageSize: options.pageSize || "A4",
        backgroundColor: options.backgroundColor || "#000",
    };
}
```

### Cons

-   ยุ่งยาก ต้องเขียนโค้ดซ้ำ ๆ
-   เสี่ยงต่อการลืมตั้งค่าบางตัวแปร

## Good Practice

ใช้คำสัง `Object.assign(target, source)`

```js
function createNewPage(options = {}) {
    const defaultOptions = {
        title: "Untitled",
        pageSize: "A4",
        backgroundColor: "#000",
    };
    options = Object.assign({}, defaultOptions, options);
}
```

### Pros

-   สั้นกระชับ เขียนโค้ดน้อยลง
-   มั่นใจได้ว่าตั้งค่าครบทุกตัว
-   เข้าใจง่าย อ่านโค้ดได้ง่ายขึ้น

## Summary

`Object.assign` เป็นเครื่องมือที่มีประโยชน์ในการรวม object สองตัวเข้าด้วยกัน
ช่วยให้เขียนโค้ดได้สั้นลง เข้าใจง่าย
และมั่นใจได้ว่าตั้งค่าครบทุกตัว

**ลองใช้ดูสิ!**
