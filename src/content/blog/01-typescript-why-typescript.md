---
title: "ตอนที่ 1 ทำไมต้อง TypeScript"
author: "piyaphat"
description: "มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero"
pubDate: "Jan 30 2024"
next: "02-typescript-for-js-dev"
heroImage: "/images/typescript.png"
categories: ["typescript"]
---

## What is JavaScript

ก่อนจะพูดถึง TypeScript เรามาคุยกันก่อนว่า JavaScript คืออะไร

**JavaScript** คือภาษาโปรแกรมที่ทำให้เว็บเพจของเรา "มีชีวิตชีวา" ขึ้นมา ตัวอย่างเช่น เมื่อกดปุ่มแล้วมีข้อความปรากฏขึ้น หรือเลื่อนหน้าเว็บแล้วมีภาพสไลด์เลื่อน เช่น

-   เมื่อคุณกดปุ่มบนเว็บเพจแล้วมีข้อความหรือรูปภาพปรากฏขึ้นมา
-   เมื่อคุณเลื่อนหน้าเว็บแล้วมีภาพสไลด์เลื่อนไปมา

> ในภายหลัง JS ถูกเอามาใช้นอกจากบน browser โดยใช้ node.js โดยมีหลักการว่า "run anywhere" ทำให้กลายเป็นตัวเลือกแรก ๆ เมื่อเราต้องการทำ cross-platform development ในปัจจุบันจึงมีนักพัฒนามามายที่ใช้ JavaScript

## Why it's bad

**JavaScript** ถูกออกแบบมาให้ใช้งานง่าย ยืดหยุ่น แต่ก็อาจสร้างปัญหา เช่น

-   `==` ทำงานแปลก ๆ

```js
if ("" == 0) {
    // It is! But why??
}
if (1 < x < 3) {
    // True for *any* value of x!
}
```

-   เข้าถึง properties ที่ไม่มีอยู่

```js
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
```

-   แบบนี้ก็ได้

```js
console.log(4 / []); // Infinity
```

ภาษาอื่นๆ ส่วนใหญ่จะตรวจจับ Error เหล่านี้ก่อน run โดยใช้ **static type checking** แต่ JavaScript ไม่ได้ทำ

## What is TypeScript

**TypeScript** คือ Superset ของ JavaScript หมายความว่า

-   ใช้ syntax ของ JavaScript ได้
-   มีกฎเกณฑ์เพิ่มเติม เช่น การใช้ตัวแปรต้องมี Type ที่ชัดเจน

## Why TypeScript

-   TypeScript ช่วยให้เขียนโค้ดที่ ปลอดภัย และ อ่านง่าย
-   TypeScript ช่วยให้ หา Error ได้ง่ายขึ้น
-   TypeScript ช่วยให้ พัฒนา Cross-platform ได้ง่าย

## Todo

ลองเปลี่ยนมาใช้ TypeScript กันเถอะ!

สิ่งที่เราจะทำกันใน EP นี้ก็คือเปลี่ยนนามสกุล `.js` มาเป็น `.ts` เลยโต้ง ๆ

## Results

เพียงแค่เปลี่ยนนามสกุลจาก `.js` มาเป็น `.ts` editor ของเราก็จะฟ้องขึ้นมา แบบนี้

> จาก run ผ่านและได้ผลลัพธ์เป็น NaN

```ts
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
// Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
```

> จาก run ผ่านและได้ผลลัพธ์เป็น Infinity

```js
console.log(4 / []);
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```

## Who should use TypeScript?

-   เหมาะกับ **ทุกคน** ที่เขียน JavaScript
-   เหมาะกับ **มือใหม่** ที่ต้องการเริ่มต้นเขียนโค้ดอย่างมีประสิทธิภาพ
-   เหมาะกับ **มือเก๋า** ที่ต้องการพัฒนาโค้ดที่ปลอดภัยและอ่านง่าย

## Resources

-   TypeScript for the New Programmer: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

## Note

-   เนื้อหานี้เป็นเพียงการสรุปคร่าวๆ ยังมีรายละเอียดอีกมากมาย
-   แนะนำให้ศึกษาเพิ่มเติมจากแหล่งข้อมูล
