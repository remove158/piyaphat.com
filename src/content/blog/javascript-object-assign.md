---
title: 'วิธี set default ให้ Object แบบมือโปร'
author: 'piyaphat' 
description: 'เกล็ดความรู้เสริม Javascript'
pubDate: 'Jan 27 2024'
heroImage: '/images/javascript.png'
categories: ['javascript', 'typescript']
---

## TL;DR
> เราสามารถใช้คำสัง  `Object.assign(target, source)` ในการรวม object สองตัวเข้าด้วยกันได้


## Traditional
แต่เดิมนั้นเรามีวิธีการเซ็ตค่า default ให้ตัวแปร โดยใช้ `||` ในการเซ็ตค่าเริ่มต้นซึ่งต้องทำการเซ็ตทุก ๆ ตัวทำให้ผลออกมาได้ดังนี้
```js
function createNewPage(options){
	options = options || {}
	let new_option = {
		title: options.title || 'Untitled',
		pageSize: options.pageSize || 'A4',
		backgroundColor: options.backgroundColor || '#000',
	}
}
```

## Good Practice
ใช้คำสัง  `Object.assign(target, source)` ในการรวม object สองตัวเข้าด้วยกัน ทำให้มั่นใจได้ว่าเรากำหนดครบทุก feild อย่างแน่นอน
```js
function createNewPage(options = {}){
	const defaultOptions = {
		title: 'Untitled',
		pageSize: 'A4',
		backgroundColor: '#000',
	};
	options = Object.assign(defaultOptions, options);
}
```


