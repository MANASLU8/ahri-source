import cv2
import os

def convert_to_gray(image):
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return gray_image

def remove_noise(image):
    denoised_image = cv2.fastNlMeansDenoising(image, None, 10, 7, 21)
    return denoised_image

input_path = "data_for_recognition"
output_path = "data_for_recognition"

# Проверка, существует ли папка для сохранения обработанных изображений
if not os.path.exists(output_path):
    os.makedirs(output_path)

# Рекурсивная обработка изображений из разных папок
for root, dirs, files in os.walk(input_path):
    for filename in files:
        if filename.endswith(".jpg") or filename.endswith(".png"):
            image_path = os.path.join(root, filename)
            image = cv2.imread(image_path)

            # Преобразование в черно-белое изображение
            gray_image = convert_to_gray(image)

            # Удаление шума
            denoised_image = remove_noise(gray_image)

            # Получение пути для сохранения обработанного изображения
            relative_path = os.path.relpath(root, input_path)
            output_folder = os.path.join(output_path, relative_path)
            output_filename = os.path.join(output_folder, filename)

            # Проверка, существует ли папка для сохранения обработанного изображения
            if not os.path.exists(output_folder):
                os.makedirs(output_folder)

            # Сохранение обработанного изображения
            cv2.imwrite(output_filename, denoised_image)
