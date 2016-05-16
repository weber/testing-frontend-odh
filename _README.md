
# Fastypack
Простой инструмент на основе browser-sync, systemjs и gulp'а. Работа и сборка через npm  пакеты(jquery, backbone…) но можно и подключать и другим способом.
javascript - systemjs, es6(es2015), autopolyfiller
stylesheet - sass, scss, autoprefixer, csso
html - html includer| template swig | jade

Есть возможности нескольких точек входа для html, javascript, stylesheet,
 что позволяет создвать раздельные файлы для разных приложений/элементов/компонентов

### Зависимости:
```
сервер: nodejs
менеджер пакетов: npm
менеджер задач: gulp
```

### Установка: 
```

```
### Запуск:
```
// html template
$ fasty -i myapp 

// swig template
$ fasty -i myapp swig

// jade template
$ fasty -i myapp jade


$ cd myapp
$ fasty -r
```
Открываем в браузере указаный адресс программой :)



MIT License
===========

    Copyright (C) 2015 by Sergey Kirichenko

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN