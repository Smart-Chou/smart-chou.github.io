---
title: 循环打印九九乘法表
description: Python-02 - 循环打印九九乘法表
# 当前文章是否为原创
original: false
time: 2020-08-20
category: 编程
tag:
  - Python
icon: python
---

<br>

## 前言

通过 `while` 的嵌套实现简单的九九乘法表打印

## 思路

首先定义一个变量控制行，初始值为`1`，确定行的循环条件

再定义一个变量控制列，始值`1`，确定列的循环条件

## 代码

```python
row = 1
while row <= 9:
      col = 1     
      while col <= row:      
      print("%d * %d = %d" % (row, col, row*col), end="\t")         
      col += 1     
      print("")     
      row += 1
```

## 注意

`print` 函数有一个参数 `end` ，默认的值为 `\n`，因此`print`输出内容后会默认在文本后增加换行，修改参数值可以添加特定内容：

```python
# 双引号内即为可以更换的特定内容
" , end="""
 
# 单纯的换行
print("") 
```

## 结果

```python
1 * 1 = 1
2 * 1 = 2  2 * 2 = 4
3 * 1 = 3  3 * 2 = 6  3 * 3 = 9  
4 * 1 = 4  4 * 2 = 8  4 * 3 = 12  4 * 4 = 16
5 * 1 = 5  5 * 2 = 10  5 * 3 = 15  5 * 4 = 20  5 * 5 = 25
6 * 1 = 6  6 * 2 = 12  6 * 3 = 18  6 * 4 = 24  6 * 5 = 30  6 * 6 = 36
7 * 1 = 7  7 * 2 = 14  7 * 3 = 21  7 * 4 = 28  7 * 5 = 35  7 * 6 = 42  7 * 7 = 49
8 * 1 = 8  8 * 2 = 16  8 * 3 = 24  8 * 4 = 32  8 * 5 = 40  8 * 6 = 48  8 * 7 = 56  8 * 8 = 64 
9 * 1 = 9  9 * 2 = 18  9 * 3 = 27  9 * 4 = 36  9 * 5 = 45  9 * 6 = 54  9 * 7 = 63  9 * 8 = 72  9 * 9 = 81
```

## 转义字符

可以使用转义字符 `\`对打印结果进行规范

```python
# 输出文本时垂直方向保持对齐
\t 
# 换行
\n 
# 输出双引号
\" 
```
