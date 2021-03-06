---
title: 语法进阶
description: Python-05 - 语法进阶
# 当前文章是否为原创
original: false
time: 2021-02-02
category: 编程
tag:
  - Python
icon: python
---

<br>

## 语法进阶

### 变量的引用

- **变量**和**数据**都保存在内存中
- Python 中函数的**参数传递**以及返回值都是靠**引用**传递的

### 引用的概念

Python 中

- 变量和数据分开存储
- **数据**保存在内存中的一个位置
- **变量**中保存着数据在内存中的地址
- 变量中**记录数据地址**的动作就叫引用
- `id()` 函数可以查看变量中保存数据的内存地址

::: info
如果变量已经被定义，当给一个变量赋值的时候，本质上是修改了**数据的引用**

- 变量**不再**对之前的数据引用
- 变量改为对新赋值的数据引用
:::

### 函数的参数和返回值的传递

Python 中，函数的**实参 / 返回值**都是靠引用传递的

- 调用函数，本质上是传递的**实参 / 返回值保存数据的引用**，而不是实参保存的数据
- 如果不定义变量接收函数的返回值，程序不会报错，但是无法获得返回结果

### 可变类型不可变类型

- 不可变类型，内存中的数据不允许被修改
  - 数字类型 `int`, `bool`, `float`, `complex`
  - 字符串 `str`
  - 元组 `tuple`
- 可变类型，内存中的数据可以被修改
  - 列表 `list`
  - 字典 `dict` 字典的 `key` 只能使用**不可变数据类型**

## 局部变量和全局变量

### 局部变量

- **局部变量**是在函数**内部**定义的变量，只能在函数内部使用
- 函数执行结束后，函数内部的局部变量，会被系统**回收**
- 局部变量的**生命周期**
  - 生命周期是变量从**被创建**到**被系统回收**的过程
  - 局部变量在函数**执行**时才会被创建
  - 局部变量在生命周期内，可以用来存储函数内部临时使用到的数据

### 全局变量

- **全局变量**是在函数外部定义的变量，**所有**函数都可以使用
- 其他开发语言中**大多不推荐使用全局变量**
- 不允许在函数内部修改全局变量
- 在函数内部重新赋值，只是定义了一个**局部变量**
- 希望修改全局变量的值 使用 `global` 声明变量即可
- 应该把模块中的所有全局变量定义到**所有函数上方**
- 全局变量命名前方应加 `g_` 或 `gl_` 等与局部变量区分
- 如果局部变量和局部变量名称相同，`pycharm` 会在局部变量下方显示灰色虚线

## 参数和返回值

函数根据有**没有参数**和有**没有返回值**可以自由组合，共 4 种

1. 无参数，无返回值
2. 无参数，有返回值
3. 有参数，无返回值
4. 有参数，有返回值

- 如果函数**内部处理数据**不确定，可以将外界数据以参数形式传递给函数
- 如果希望函数执行完成后，向**外界汇报结果**，可以增加返回值

### 函数的返回值 - 多个返回值

- 元组可以包含多个数据，因此可以使用元组让函数一次返回多个值
- 如果函数返回的结果是元组，**小括号可以省略**
- 如果函数的**返回值类型是元组**，需要单独处理元组中的元素可以使用**多个变量**，一次接收函数的返回结果
  - 注意：使用此方法，变量的个数应该和元组中元素的**个数保持一致**

### 问题：交换两个变量的值？

```python
a = 6
b = 100
# 1. 使用其他变量
# c = a
# a = b
# b = c
   
# 2. 不使用其他变量
# a = a + b
# b = a - b
# a = a - b
   
# 3. Python 专有
# a, b = (b, a)
# 元组小括号可省略
a, b = b, a
print(a)
print(b)
```

### 函数的参数

#### 不可变和可变参数

- 在函数内部，针对参数使用赋值语句不会影响调用函数时传递的实参变量
- 无论传递的参数是可变还是不可变
- 在函数内部，针对参数使用赋值语句，不会修改外部实参变量

```python
def demo(num, num_list):
    print("函数内部的代码")

    # 在函数内部，针对参数使用赋值语句,不会修改外部实参变量
    num = 100
    num_list = [1, 2, 3]

    print(num)
    print(num_list)
    print("函数执行完成")

gl_num = 99
gl_list = [4, 5, 6]
demo(gl_num, gl_list)
print(gl_num)
```

- 如果传递的参数是**可变类型**，在函数内部，使用方法修改了数据的内容，同样会**影响到外部数据**

```python
def demo(num_list):
    print("函数内部代码")
    num_list.append(9)
    print(num_list)
    print("函数执行完成")

gl_list = [1, 2, 3]
demo(gl_list)
print(gl_list)
```

### 问题：-- +=

在 Python 中，列表变量调用 `+=` 本质上是在执行列表变量的 `extend` 方法，不会修改变量的引用

### 缺省参数

- 定义函数时，可以给某个参数**指定一个默认值**，具有默认值的参数就叫做缺省参数
- 带有默认值的**缺省参数必须在参数列表末尾**
- 如果有多个缺省值，需要**指定参数名**

### 多值参数

- 有可能需要一个函数能够处理的参数个**数是不确定的**，这时使用多指参数
- Python 中有两种多值参数
  - 参数名前增加一个 `*`，可以接收元组
  - 参数名前增加两个 `*`，可以接收字典
- 一般在给多指参数命名时，习惯使用以下两个名字
  - `*args` -- 存放元组参数，前面一个 `*`
- `**kwargs` -- 存放字典参数，前面两个 `*`
- `args` 是 `arguments` 的缩写，有变量的含义
- `kw` 是 `keyword` 的缩写，`kwargs` 可以记忆**键值对参数**

### 案例：计算任意多个数字的和

```python
def sum_nums(*args):
    num = 0
    # 循环遍历
    for n in args:
        num += n
    return num

result = sum_nums(1, 2, 3, 4, 5)
print(result)
```

- 元组和字典的拆包
- 在调用带有多值参数的函数时，如果希望
- 将一个**元组**变量，直接传递给 `args`
- 将一个**字典**变量，直接传递给 `kwargs`
- 可以使用`拆包`，简化参数的传递，拆包的方式是：
  - 在`元组`变量前，增加一个 `*`
  - 在`字典`变量前，增加两个 `*`

## 递归

递归：函数调用自身

### 递归的特点

- 一个函数内部调用自己
  - 函数内部可以调用其他函数，也可以在内部调用自己

### 代码特点

1. 函数内部的代码是相同的，只是针对参数不同，处理的结果不同
2. 当参数满足一个条件时，函数不再执行
    1. 被称为递归的出口，否则会造成死循环

### 案例 -- 计算数字累加

1. 定义一个函数 `sum_numbers`
2. 能够接受一个 `num` 的整体参数
3. 计算 `1 + 2 ... num` 的结果

```python
def sum_numbers(num):

    # 1. 出口
    if num == 1:
        return 1
    # 2. 数字累加 num + (num - 1)
    # 假设 sum_numbers 能处理 1到 num -1 的累加
    temp =sum_numbers(num - 1)
    return num + temp

result = sum_numbers(100)
print(result)
```
