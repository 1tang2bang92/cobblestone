
crdt:
    https://github.com/yjs/yjs
    https://github.com/yjs/y-quill/blob/master/src/y-quill.js

    yjs에 toastui 해보고 안되면
    y-quill로

    https://www.notion.so/blog/creating-the-notion-api

    

front:
    vite

    jest
    react
    react-dom-router
    @toast-ui/editor
    axios
    @mui/material
    @emotion/react
    @emotion/styled
    https://mui.com/

    yjs

back:
    nest
    prisma
    
    yjs

db:
    postgresql

계획:
    실시간 협업(crdt)
    table 생성시 api제공
    공개범위: public / group / private
    group: 관리자와 유저? 내부적으로 role 

monorepo
Apache License 2.0

urls:
    /
    /admin

    /user/@{unique_name} //redirect uuid
    /user/{uuid}/profile
    /user/{uuid}/{repo_uid}

    /group/@{unique_name} //redirect uuid
    /group/{uuid}
    /group/{uuid}/{repo_uid}

page list:
    main(like velog main page)

    admin page

    mypage
        - 개인레포 + 그룹레포 list
        - my profile
    
    settings
        - prefernce

    개인 페이지? | 프로필? 
        - 개인 설정
        - 개인 레포
        - 개인 레포 설정
    
    그룹 페이지 
        - 그룹 설정
        - 그룹 레포
            - 그룹 레포 설정

unique_name condition:
    user: fallow 15 이상
    group: user 20명 이상






