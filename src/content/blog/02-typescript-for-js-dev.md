---
title: "ตอนที่ 2 TypeScript for JS Programmer"
author: "piyaphat"
description: "มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero"
pubDate: "Jan 31 2024"
prev: "01-typescript-why-typescript"
next: "03-typescript-tools"
heroImage: "/images/typescript.png"
categories: ["typescript"]
---

จาก EP ที่แล้ว เราได้เรียนรู้วิธีแปลงไฟล์ JavaScript เป็น TypeScript และทำความรู้จักกับ Types เบื้องต้น

ใน EP นี้ เราจะมาเจาะลึกเกี่ยวกับ Types เพิ่มเติม เหมาะสำหรับผู้ที่เคยเขียน JavaScript มาก่อน

## Types by Inference

TypeScript สามารถดึง Type ของตัวแปรจากค่าที่กำหนดให้โดยอัตโนมัติโดยทั่วไป

> TypeScript สรุป type ให้ว่า helloWorld เป็น string

```js
let helloWorld = "Hello World";

//let helloWorld: string
```

## Defining Types

เราสามารถกำหนด Type ของตัวแปรได้ด้วยตัวเอง โดยใช้ interface

```ts
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};
```

### Pros

-   ช่วยให้โค้ดอ่านง่าย เข้าใจง่าย
-   ป้องกันการเขียนโค้ดผิดพลาด
-   ช่วยให้ TypeScript ตรวจจับ Error ได้ง่าย

> ข้อสังเกตุ เราจะจะไม่สามารถสร้าง properties อื่นที่เราไม่ได้ประกาศไว้แต่แรกได้ ดังนี้

```ts
interface User {
    name: string;
    id: number;
}

const user: User = {
    username: "Hayes",
    // Type '{ username: string; id: number; }' is not assignable to type 'User'.
    //  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
    id: 0,
};
```

## Composing Types

### Unions

ประกาศ Type ที่รองรับค่าได้หลายแบบ

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

จะเอาไปใช้บน `function` ก็ได้ ดังนี้

```ts
function getLength(obj: string | string[]) {
    return obj.length;
}
```

### Typeof

ถ้าหากว่าเราอยากรู้ว่ามันคือ type อะไร ให้ใช้คำสั่ง `typeof`:
| Type | Predicate |
| --- | --- |
|string | typeof s === "string" |
|number | typeof n === "number" |
|boolean | typeof b === "boolean" |
|undefined | typeof undefined === "undefined" |
|function | typeof f === "function" |
|array | Array.isArray(a)| |

ตัวอย่างเช่น เราสามารถ เขียนฟังค์ชั่นที่ return ค่าอะไรก็ขึ้นอยู่กับ type ดังนี้

```ts
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
```

### Generics

Generics เหมือนการสร้างตัวแปรให้กับ Type

ตัวอย่างทั่วไปเช่นการทำ Array ที่รับ Generics อยู่แล้ว

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

เราสามารถสร้าง type ที่ใช้ Generics ได้เช่นกัน

```ts
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
```

## Structural Type System

TypeScript ตรวจสอบ Type ของตัวแปรจากโครงสร้างของข้อมูลหนึ่งในหลักการสำคัญของ TypeScript คือ Type checking จะดูแค่ shape ของ values

หรือที่รู้จักกันว่า `duck typing` หรือ `structural typing`

> สังเกตุที่ `logPoint(point)`

```ts
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point); // เราไม่จำเป็บต้องประกาศ type ให้ point ขอแค่ shape มันตรงกันกับที่ประกาสไว้ก็พอ
```

**EP นี้** เน้นการสรุปเนื้อหาให้เข้าใจง่าย เหมาะสำหรับผู้ที่เคยเขียน JavaScript มาก่อน

**EP ต่อไป** เราจะเริ่มเรียนรู้ TypeScript ตั้งแต่พื้นฐาน เหมาะสำหรับทั้งมือใหม่และมือเก๋า

## References

-   TypeScript for JavaScript Programmers: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
