---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Bienvenue sur la documentation du Back-End de notre TP.


<!-- END_INFO -->

#Fonctionnalités


<!-- START_da92a85b0737a603c93b0db10deaf6a0 -->
## api/vue
> Exemple de requete:

```bash
curl -X POST \
    "http://localhost/api/vue" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vue"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### Requete HTTP
`POST api/vue`


<!-- END_da92a85b0737a603c93b0db10deaf6a0 -->
<!-- START_c5fb2123324df8bf605c201731196342 -->
## Affichage des absences d'un étudiant à partir de api/abs
> Exemple de requete:

```bash
curl -X GET \
    -G "http://localhost/api/abs" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/abs"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "module": "SYS",
            "date": "2019-11-19",
            "id": 1
        },
        {
            "module": "SYS",
            "date": "2019-11-11",
            "id": 3
        },
        {
            "module": "THP",
            "date": "2019-11-19",
            "id": 5
        }
    ]
}
```

### Requete HTTP
`GET api/abs`


<!-- END_c5fb2123324df8bf605c201731196342 -->
<!-- START_f170673a41f0eb135f09ffe673d8bcb3 -->
## Afficher liste des étudiants d'un groupe api/affichgroupe/{id_groupe}
> Exemple de requete:

```bash
curl -X GET \
    -G "http://localhost/api/affichgroupe/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/affichgroupe/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Exemple de response (200):

```json
{
    "data": []
}
```

### Requete HTTP
`GET api/affichgroupe/{id_groupe}`


<!-- END_f170673a41f0eb135f09ffe673d8bcb3 -->
<!-- START_e8b652dc20944880bb55ce67268c966c -->
## Afficher nom d'un étudiant api/nom
> Exemple de requete:

```bash
curl -X GET \
    -G "http://localhost/api/nom" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/nom"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "nometudiant": "Boudjellay",
            "prenometudiant": "Mehdi"
        }
    ]
}
```

### Requete HTTP
`GET api/nom`


<!-- END_e8b652dc20944880bb55ce67268c966c -->
<!-- START_1596c35b519a8b36d0ebdfc7b32cd81b -->
## Afficher la liste des groupes d'un enseignant api/groupes
> Exemple de requete:

```bash
curl -X GET \
    -G "http://localhost/api/groupes" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/groupes"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "niveau": 3,
            "groupe": "1CSG08",
            "id": 1
        },
        {
            "niveau": 3,
            "groupe": "1CSG03",
            "id": 3
        },
        {
            "niveau": 3,
            "groupe": "1CSG04",
            "id": 4
        }
    ]
}
```

### Requete HTTP
`GET api/groupes`


<!-- END_1596c35b519a8b36d0ebdfc7b32cd81b -->
<!-- START_f2ee9430d39ad3cec4bf0269db41a3d0 -->
## Afficher nom d'un enseignant api/nomprof
> Exemple de requete:

```bash
curl -X GET \
    -G "http://localhost/api/nomprof" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/nomprof"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "nomens": "Temglit ",
            "prenomens": "Nacera"
        }
    ]
}
```

### Requete HTTP
`GET api/nomprof`


<!-- END_f2ee9430d39ad3cec4bf0269db41a3d0 -->
<!-- START_74f4f5c4cc0f54fdd5c9062567e4a23f -->
## Afficher la liste de tous les étudiants api/affich
> 
Exemple de requete:
```bash
curl -X GET \
    -G "http://localhost/api/affich" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/affich"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "data": [
        {
            "nom": "KHOUAS",
            "prenom": "Ouerdia",
            "id": 1
        },
        {
            "nom": "Hamdine",
            "prenom": "Israa",
            "id": 2
        },
        {
            "nom": "Boudjellay",
            "prenom": "Mehdi",
            "id": 3
        },
        {
            "nom": "Guin12",
            "prenom": "YAnus",
            "id": 4
        },
        {
            "nom": "TC",
            "prenom": "Yacine",
            "id": 5
        },
        {
            "nom": "Debiane",
            "prenom": "Mehdi",
            "id": 6
        },
        {
            "nom": "Hennouni",
            "prenom": "Narimane",
            "id": 7
        },
        {
            "nom": "Elhassane",
            "prenom": "Nour",
            "id": 8
        },
        {
            "nom": "MDJAAAhed",
            "prenom": "Lamiaa",
            "id": 9
        },
        {
            "nom": "Rachedi",
            "prenom": "NadA",
            "id": 10
        }
    ]
}
```

### Requete HTTP
`GET api/affich`


<!-- END_74f4f5c4cc0f54fdd5c9062567e4a23f -->
<!-- START_66e08d3cc8222573018fed49e121e96d -->
