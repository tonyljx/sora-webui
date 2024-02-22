import json

# Step 1: Read URLs from res.txt
with open("res.txt", "r", encoding="utf-8") as file:
    urls = [line.strip() for line in file.readlines()]
print("urls 的size", len(urls))

# Step 2: Load video.json
with open("video.json", "r", encoding="utf-8") as file:
    videos = json.load(file)

print("video 的size", len(videos))
# Step 3: Insert srcZh values
for video, url in zip(videos, urls):
    video["srcZh"] = url

# Step 4: Save the modified JSON
with open("video_modified.json", "w", encoding="utf-8") as file:
    json.dump(videos, file, ensure_ascii=False, indent=2)
