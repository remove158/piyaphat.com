---
title: "ตอนที่ 3 TypeScript Tooling"
author: "piyaphat"
description: "มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero"
pubDate: "Feb 1 2024"
prev: "02-typescript-for-js-dev"
next: "04-typescript-basics"
heroImage: "/images/typescript.png"
categories: ["typescript"]
---

## Installing TypeScreipt

มีสองวิธ๊หลัก ๆ ในการติดตั้ง TypeScript บน Project

-   ผ่าน npm (Node.js packae manager)
-   Visual Studio plugins

ในบทความนี้เราจะใช้วิธี npm กัน ดังนี้

```sh
 npm i -g typescript
```

## Building your first TypeScript file

เปิด Editor มาแล้วพิมพ์ JavaScript โค้ดนี้ใน `greeter.ts`

> ใน editor ถ้าหากเราไป hover function greeter ก็จะเห็น type เป็น function greeter(person: any): string

```ts
// function greeter(person: any): string
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

## Compiling your code

```sh
tsc greeter.ts
```

ดูผลลัพธ์ `greeter.js` สังเกตุว่าเราใช้ `.ts` ก็จริงแต่สิ่งที่เราใส่เข้าไปมันเป็น js code ทำให้ผลลัพธ์ก็จะออกมาเหมือนเดิม

ทีนี้ลองแก้ใหัมันมี Type แล้วลอง compile อีกครั้งก็จะเห็นว่ามันได้ผลลัพธ์เดิมเพิ่มเติมคือมันจะรู้ฟังค์ชั่นเรารับอะไร

> ใน editor ถ้าหากเราไป hover function greeter ก็จะเห็น type เป็น function greeter(person: string): string

```ts
// function greeter(person: string): string
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

---

ในบทความนี้เราได้รู้วิธีการติดตั้ง TypeScript และเรียนรู้ TypeScript Tooling พื้นฐาน ในตอนต่อไปเราจะเข้าสู่ TypeScript Basic กัน

---

ref: [TypeScript Tooling](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
