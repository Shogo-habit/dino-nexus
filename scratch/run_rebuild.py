import sys

# Import the rebuild logic directly
with open("scratch/rebuild_app.py", "r", encoding="utf-8") as f:
    code = f.read()

# Execute it to generate the final file
# We'll modify scratch/rebuild_app.py to write to app.js
with open("scratch/rebuild_app.py", "a", encoding="utf-8") as f:
    f.write("\n\n# Execution logic to write the rebuilt code\n")
    f.write("rebuilt_content = segment_start + routes_def + middle_segment_1 + render_home_def + lines_296_to_554 + dictionary_matches_region + lines_560_to_1030 + lines_1061_to_1164 + topics_and_world_map_code + '\\n\\ninit();\\n'\n")
    f.write("with open('app.js', 'w', encoding='utf-8') as out:\n")
    f.write("    out.write(rebuilt_content)\n")
    f.write("print('Rebuilt app.js successfully!')\n")

print("Appended execution logic to rebuild_app.py")
