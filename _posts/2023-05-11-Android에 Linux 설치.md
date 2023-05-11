---
title: Android에 Linux 설치
layout: single
author_profile: true
comments: true
share: true
related: false
date: '2023-05-11'
tags:
    - Android
    - Linux
---

## Linux 기본 명령어

> hostname -I
* 현재 연결된 IP 확인

> uname -a
* 현재 Linux 버전 정보

## 설치
### Termux
* Android에서 Linux Terminal 사용 할 수 있는 App.

#### Termux에서 ssh 실행
* pkg install openssh
* sshd // ssh 실행

### ubuntu 실행
* apt install proot-distro 입력
* proot-distro install ubuntu 입력
* proot-distro login ubuntu 입력

### code-server
* github : https://github.com/coder/code-server
* IP 수정
~/.config/code-server/config.yaml
bind-addr: 127.0.0.1:8080  // 127.0.0.1을 현재 IP로 변경.

* code-server --auth none & // code-server 백그라운드에서 실행 
