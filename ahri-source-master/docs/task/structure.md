# Структура

Процесс достижения цели практической части данного курса состоит в последовательном выполнении и защите {{ $themeConfig.variables.nTasks }} лабораторных работ.

По результатам выполнения лабораторных работ суммарно можно получить
от {{ $themeConfig.variables.tasks.reduce((sum, current) => sum + current.minScore, 0) }}
до {{ $themeConfig.variables.tasks.reduce((sum, current) => sum + current.maxScore, 0) }}
баллов, из которых складывается итоговая оценка для допуска к экзамену.