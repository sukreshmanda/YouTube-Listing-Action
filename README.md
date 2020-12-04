# URL-Listing-Action
<img width="30px" src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png">
GitHub action to list any web links in readme

### Step1 : Create Comments in readme file to identify where to place links

```
<!--LIST-START-->

<!--LIST-END-->

```

### Step2 : Create repo secret keys for commiting changes to repo

```
EMAIL : <GitHub Email>
USERNAME : <GitHub UserName>

```

### Step3: create a file with name ``` list.conf ``` and data format

```
<Name For Showing> <Web Link>

Dumb Minds https://youtube.com/c/dumbminds/

```

### Step4 : Add a workflow file with anyname at .github/workflows/

```
blank.yml

```

### Step5 : Add the code like this in jobs section

```
      - uses: sukreshmanda/URL-Listing@v1.0.7
      
      - name: Store data back to repo
        run: |
           git config --global user.email ${{secrets.EMAIL}}
           git config --global user.name ${{secrets.USERNAME}}
           git add .
           git status
           git commit -m "adding npm files"
           git push origin main
```
