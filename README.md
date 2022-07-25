# food delivery
# test task for eliftech school

Посилання на проект (на безкоштовному хостингу)/(free hosting expires on 2022-08-01): 
http://food-delivery.zzz.com.ua/

Для створення проекту я використовував XAMPP (сервер та БД).
Відео з поясненнями щодо встановлення XAMPP'у та сайту(проекту) на локальній машині можна подивитись на Ютубі, наприклад тут:
https://www.youtube.com/watch?v=RlJZ6z4hBbs
Тільки в моєму випадку локальний URL сайту:   http://fooddelivery.loc/

Скачати XAMPP можна за посиланням:
https://www.apachefriends.org/ru/index.html

Під час установки XAMPP, у виборі компонентів (Select Components), достатньо залишити лише наступні пункти:
- Server: Apache, MySQL.
- Program Languages: PHP.
- Program Languages: phpMyAdmin.

Після установки XAMPP слід відкрити Блокнот (Notepad) від імені Адміністратора, та відкрити файл hosts (для відображення у блокноті вибрати показувати "Всі файли"), що розташований:
С:/Windows/System32/drivers/etc/hosts
У файлі hosts у самому низу додати нову строку з наступним змістом:
  127.0.0.1 fooddelivery.loc

Також від імені адміністратора слід відкрити файл httpd-vhosts.conf, що розташований у папці xampp:
xampp/apache/conf/extra/httpd-vhosts.conf
Та достатньо буде додати в кінці файлу наступні 4 строки:
  <VirtualHost *:80>
      DocumentRoot "C:/xampp/htdocs/fooddelivery.loc"
      ServerName fooddelivery.loc
  </VirtualHost>

Після цього треба перезапустити сервер Apache. Зупинка робиться кнопкою Stop у колонці Actions у XAMPP Control Panel (запускаеться xampp-control.exe у папці xampp), а запуск кнопкою Start на цьому ж самому місці.

Усі файли та папки проекту слід розмістити у окремій папці всередині папки htdocs (xampp/htdocs/fooddelivery.loc/"сюди скопіювати проект").

Для підключення бази данних (БД) слід зайти у phpMyAdmin, що можна зробити за посиланням   http://localhost/phpmyadmin/   у браузері, або через XAMPP Control Panel.
У верхньому рядку є вкладка Імпорт (Импорт). Натиснувши її, у верхній частині відкритого екрану (нажавши на клавішу "Виберіть файл/Выберите файл") вибираємо файл з базою данних, що називається food_delivery.sql та знаходиться у папці db (у папці мого проекту). 
Кодировка файлу залишається utf-8. Натискаємо кнопку "Імпорт/Импорт" у самому низу екрана.
У лівому стовбчику повинна з'явитися нова база данних під назвою food_delivery. В ній знаходяться 3 таблиці.

У браузері переходимо за адресою  http://fooddelivery.loc/
Якщо видає результати пошуку в пошуковій системі, перевірте чи присутнє "http://" перед "fooddelivery.loc/" у адресному рядку браузера.

Якщо у вас вже був установлений XAMPP та були змінені глобальні настройки підключення, дані щодо підключення сайту можна змінити, і знаходяться вони у файлі db.php у папці configs. Продублюю тут: 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "food_delivery";
