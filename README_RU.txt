ejudge-standings
================

Конфигурация и скрипты для ejudge для более красивой таблицы результатов.

ejudge/sheader.shtml - вверх таблицы результатов 
ejudge/sfooter.shtml - низ таблицы результатов
ejudge/sstyle.css - стили для ячеек и таблицы
ejudge/smain.js - скрипт добавления классов (использует jQuery)

Установка
=========

1. Скопировать папку ejudge в корень вашего веб-сервера

2. Добавить в конфигурацию контеста следующие строки:

stand_header_file = путь до вашего веб-сервера + "/ejudge/sheader.shtml"
stand_footer_file = путь до вашего веб-сервера + "/ejudge/sfooter.shtml"
stand_fancy_style
stand_success_attr = " class=\"last-success\""
stand_place_attr = " class=\"place\""
stand_team_attr = " class=\"team\""
stand_prob_attr = " class=\"problems\""
stand_solved_attr = " class=\"solved\""
stand_penalty_attr = " class=\"penalty\""
stand_fail_attr = " class=\"check-failed\""
stand_trans_attr = " class=\"transient\""
stand_time_attr = " class=\"success\""
stand_show_ok_time

3. Создать символьную ссылку из папки веб-сервера на вашу таблицу

Готово!
