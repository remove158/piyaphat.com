---
title: "ตอนที่ 4 TypeScript Basics"
author: "piyaphat"
description: "มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero"
pubDate: "Feb 2 2024"
prev: "03-typescript-tools"
heroImage: "/images/typescript.png"
categories: ["typescript"]
---

JavaScript เป็นภาษาที่มี dynamic type checking หมายความว่าประเภทของตัวแปรจะไม่ถูกตรวจสอบจนกว่าจะรันโปรแกรม

```ts
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

ตรงนี้จะเอ้ะว่า

-   มัน callable หรือเปล่า ?
-   มันมี property `toLowerCase` หรือเปล่า
    -   ถ้ามี `toLowerCase` จริง ๆ แล้วมัน callable หรือเปล่า
-   ถ้ามัน callable ทั้งคู่แล้วมันคืนอะไรมา ?

คำตอบอยู่ที่เรากำหนด Type ให้มันว่าเป็นอะไรในทีแรก

สมมุติว่าถ้าประการ `message` แบบนี้

```ts
const message = "Hello World!";
```

ก็จะรู้ได้ว่าถ้าเรา run `message.toLowerCase()` ก็จะได้ค่าของ message ที่เป็นตัวพิมพ์เล็ก

## Static type-checking

> TBD

## Non-exception Failures

> TBD

## Explicit Types

> TBD

## Erased Types

> TBD

## Downleveling

> TBD

## References

-   The Basics: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
