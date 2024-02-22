import json

# 假设JSON数据保存在'input.json'文件中
input_filename = 'video.json'
output_filename = 'output.txt'

# 读取JSON数据
with open(input_filename, 'r') as file:
    data = json.load(file)

# 提取每个对象的'src'元素
src_elements = [item['src'] for item in data]

# 将'src'元素写入到新的文本文件中
with open(output_filename, 'w') as file:
    for src in src_elements:
        file.write(src + '\n')
