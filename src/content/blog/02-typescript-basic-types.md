---
title: 'ตอนที่ 2 ทำความรู้จักกับ Types เบื้อต้น'
author: 'piyaphat' 
description: 'มหากาพย์ TypeScript จากมือใหม่สู่มือโปร Zero to Hero'
pubDate: 'Jan 31 2024'
prev: '01-typescript-why-typescript'
heroImage: '/images/typescript.png'
categories: ['typescript']
---

## Defining Types
สมมุติว่าเราต้องการจะสร้าง object ซึ่งมี `name: string` และ `id: number` ถ้าหากเป็น JavaScript เราจะเขียนแบบนี้

```js
const user = {
  name: "Hayes",
  id: 0,
};
```

เราสามารถกำหนดรูปให้ตัวแปรโดยใช้ interface declaration ดังนี้
```ts
interface User {
  name: string;
  id: number;
}
```

หลังจากนั้นเราก็สามารถสร้าง object โดยให้มี type เป็นแบบ interface ที่เราสร้างขึ้นมาโดยใช้ syntax `: TypeName` ดังนี้
```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```

ข้อสังเกตุที่แตกต่างกัน เราจะจะไม่สามารถสร้าง properties อื่นที่เราไม่ได้ประกาศไว้แต่แรกได้ ดังนี้ 
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
union คือสิ่งที่จะทำให้เราสามารถประกาศ type ที่มากกว่าหนึ่งได้ ดังนี้
```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```
จะเอาไปใช้บนฟังค์ชันก็ได้ ดังนี้
```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

### Typeof
ถ้าหากว่าเราอยากรู้ว่ามันคือ type อะไร ให้ใช้คำสั่ง `typeof`:
| Type | Predicate |
| --- | --- |
|string	| typeof s === "string" |
|number	| typeof n === "number" |
|boolean	| typeof b === "boolean" |
|undefined	| typeof undefined === "undefined" |
|function	| typeof f === "function" |
|array	| Array.isArray(a)| |

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

สำหรับ EP นี้ขอปูพื้นฐาน Type ไว้เพียงเท่านี้ก่อน

ตอนต่อไปเราจะตลุย Everyday Types แบบเจาะตื้นกัน !!