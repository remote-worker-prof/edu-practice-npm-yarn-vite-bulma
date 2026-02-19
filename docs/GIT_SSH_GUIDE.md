# Git + SSH + ssh-agent — руководство

Этот документ описывает, как настроить Git, SSH и ssh-agent для ручной разработки и для работы ИИ‑агента. Цель — обеспечить безопасный доступ к репозиториям по SSH без постоянного ввода пароля.

## 1. Базовые понятия
- **Git** — система контроля версий.
- **SSH** — безопасный протокол для доступа к Git‑репозиториям.
- **ssh-agent** — менеджер ключей, чтобы не вводить passphrase каждый раз.
- **.bash_profile / .bashrc** — файлы автозапуска для shell.

## 2. Проверка Git‑настроек
Проверьте текущие имя и email:
```bash
git config user.name
git config user.email
```

Для настройки локально (только в этом репозитории):
```bash
git config user.name "Your Name"
git config user.email "you@example.com"
```

Для глобальной настройки:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 3. Проверка SSH‑доступа
Проверьте, какой пользователь GitHub используется:
```bash
ssh -T github.com
```

Если используется алиас из `~/.ssh/config`, проверяйте его отдельно:
```bash
ssh -T github-worker
```

## 4. ssh-agent: запуск и добавление ключа (ручной режим)
В интерактивной shell (TTY):
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github_worker
ssh -T github-worker
```

Пояснение:
- `ssh-agent` запускается в текущей сессии;
- `ssh-add` добавляет ключ в агент;
- `ssh -T` проверяет доступ.

## 5. Автозапуск ssh-agent через .bash_profile
Для автоматического запуска агента при старте shell:
```bash
# ~/.bash_profile
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)" >/dev/null
fi
if command -v ssh-add >/dev/null 2>&1; then
  ssh-add ~/.ssh/id_ed25519_github_worker >/dev/null 2>&1 || true
fi
```

После изменения примените:
```bash
source ~/.bash_profile
```

## 6. Алиасы GitHub в ~/.ssh/config
Пример:
```ssh-config
Host github-worker
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_worker
  AddKeysToAgent yes
  IdentitiesOnly yes
```

Это позволяет использовать remote вида:
```
origin git@github-worker:owner/repo.git
```

## 7. Типовые проблемы и решения

**Ошибка:** `Permission denied (publickey)`
- Ключ не добавлен в ssh-agent → запустите `ssh-add`.
- Ключ не соответствует нужному аккаунту → проверьте `~/.ssh/config`.

**Ошибка:** `ssh_askpass: No such file or directory`
- Вы запускаете ssh без TTY. Запустите команды в обычном терминале.

**Ошибка:** `fatal: Could not read from remote repository`
- Проверьте права доступа и правильность remote URL.

## 8. Рекомендации для ИИ‑разработки
- Проверять `ssh-add -l` перед `git push`.
- Всегда использовать отдельный SSH‑алиас для рабочего аккаунта.
- Не хранить приватные ключи в репозитории.
- Хранить настройки в `~/.ssh/config` и `~/.bash_profile`, а не в проекте.

## 9. Мини‑чеклист перед push
1. `ssh-add -l` показывает нужный ключ.
2. `ssh -T github-worker` проходит успешно.
3. `git remote -v` показывает корректный URL.
4. `git push` выполняется без запроса пароля.
