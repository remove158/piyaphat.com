---
title: 'ตอนที่ 1 ทำไมต้อง TypeScript ?'
author: 'piyaphat' 
description: 'มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero'
pubDate: 'Jan 30 2024'
next: '02-typescript-basic-types'
heroImage: '/images/typescript.png'
categories: ['typescript']
---

## What is JavaScript
ก่อนจะพูดถึง TypeScript เรามาคุยกันก่อนว่า JavaScript คืออะไร ?

JavaScript คือภาษาโปรแกรมที่เอาไว้ใช้สร้างปฏิสัมพันธ์บนเว็บเพจ พูดง่ายๆ คือ ทำให้เว็บเพจของเราเคลื่อนไหวได้นั่นเอง

ยกตัวอย่างเช่น เมื่อคุณกดปุ่มบนเว็บเพจแล้วมีข้อความหรือรูปภาพปรากฏขึ้นมา นั่นคือการใช้ JavaScript อยู่ หรือเมื่อคุณเลื่อนหน้าเว็บแล้วมีภาพสไลด์เลื่อนไปมา นั่นคือการใช้ JavaScript เช่นกัน

ในภายหลัง JS ถูกเอามาใช้นอกจากบน browser โดยใช้ node.js โดยมีหลักการว่า "run anywhere" ทำให้กลายเป็นตัวเลือกแรก ๆ เมื่อเราต้องการทำ cross-platform development ในปัจจุบันจึงมีนักพัฒนามามายที่ใช้ JavaScript

## Why it's bad
ด้วยความที่มันถูก designed มาให้ใช้งานง่ายและยืดหยุ่นทำให้เกิดสิ่งเหล่านี้ตามมา

 เครื่องหมาย `==` ใน JavaScript กับพฤตกรรมสุดแปลก
```js
if ("" == 0) {
  // It is! But why??
}
if (1 < x < 3) {
  // True for *any* value of x!
}
```
เข้าถึง properties ที่ไม่มีอยู่ก็ได้นะ
```js
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
```

แบบนี้ก็ได้
```js
console.log(4 / []);  // Infinity
```

ซึ่งจริง ๆ แล้วภาษาส่วนใหญ่จะ throw error โดยที่ไม่ยอมให้ run ได้ด้วยซ้ำ (ตั้งแต่ compile) 

อีกหลายภาษาสามารถตรวจเจอ error นี้ได้โดยไม่ต้อง run โดยใช้สิ่งที่เรียกว่า static type checking แต่ว่าไม่ใช่สำหรับ JavaScript


## A Typed Superset of JavaScript
### Syntax
TypeScript เป็น Superset ของ JavaScript ทำให้ syntax บน JS ก็ใช้งานได้กับ TS เช่นกัน
หมายความว่าถ้าโค้ด JS ของคุณมันถูกต้องอยู่แล้วคุณสามารถก๊อปปี้แล้ววางมาเป็น TypeScript ได้เลยตรง ๆ
### Types
ยังไงก็ตาม เพราะมันเป็น Superset ของ JavaScript หมายความว่ามันได้มีกฎบางอย่างที่ถูกเพิ่มเข้าไป เช่น การใช้ตัวแปรใด ๆ จะไม่สามารถเปลี่ยน Type ไปมั่ว ๆ ได้ เช่น จาก string ไปเป็น number เป็นต้น
> NOTE:  `obj.heigth` ที่เราได้เจอไปก่อนหน้านี้ไม่ใช่ Syntax error แต่เป็นการเข้าถึง value ที่ผิด

## ผลลัพธ์ที่เปลี่ยนไป

 จากเดิม run ผ่านและได้ผลลัพธ์เป็น NaN
```ts
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
// Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
```

 จากเดิม run ผ่านและได้ผลลัพธ์เป็น Infinity
```js
console.log(4 / []);
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
```


ทั้งหมดนี้เป็นเพียงหนึ่งใน "หลาย ๆ" เหตุผลที่คุณควรเลิกใช้ JavaScript แล้วเปลี่ยนมาใช้ TypeScript 

คุณจะได้เผชิญกับปัญหาเหล่านั้นอย่างแน่นอนเมื่อคุณใช้ JavaScript (การันต์ตรี 100%)

ถ้าหากคุณเจอกับปัญหานั้นจนหงุดหงิดมากเกินทนแล้ว __คุณมาถูกที่แล้ว__

เพราะในตอนต่อไปเราจะพาเรียนรู้ TypeScript เบื้องต้นกัน