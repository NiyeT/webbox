import shutil

def copy(src, dst):
    try:
        shutil.copytree(src, dst)
    except OSError as exc:
        shutil.copy(src, dst)
