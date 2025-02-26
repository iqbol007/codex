#!/bin/bash

# Папка для поиска файлов
DIR="."

# Время ожидания в минутах для проверки полной загрузки файла
WAIT_TIME=1

# Текущее время в секундах с начала эпохи (1970-01-01 00:00:00 UTC)
CURRENT_TIME=$(date +%s)

# Проходим по всем файлам с расширением .xml.back в указанной директории
find "$DIR" -type f -name "*.xml.back" | while read -r FILE; do
    # Время последней модификации файла в секундах с начала эпохи
    FILE_MOD_TIME=$(date -r "$FILE" +%s)

    # Разница во времени между текущим временем и временем модификации файла
    TIME_DIFF=$((CURRENT_TIME - FILE_MOD_TIME))

    # Если файл не изменялся в течение WAIT_TIME минут, переименовать его
    if (( TIME_DIFF >= WAIT_TIME * 60 )); then
        NEW_NAME="${FILE%.xml.back}.xml"
        mv "$FILE" "$NEW_NAME"
    fi
done
