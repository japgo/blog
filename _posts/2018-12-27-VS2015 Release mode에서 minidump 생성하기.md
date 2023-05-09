---
title: VS2015 Release mode에서 minidump 생성하기.
layout: single
author_profile: true
comments: true
share: true
related: false
date: '2018-12-27'
tags:
    - minidump
    - C++
---

## VS2015 Release mode에서 minidump 생성하기.

### 프로젝트 설정 항목
#### Release 속성 설정 변경 필요.
* C/C++ -> 일반 -> SDL 검사 = 예(/sdl)
* C/C++ -> 코드 생성 -> 런타임 라이브러리 = 다중 스레드 디버그 DLL(/MDd)

* dbghelp.dll 을 이용하여 minidump 생성 위해 위와 같이 설정 되어 있어야함.
