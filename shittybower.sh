#!/bin/bash

which curl 2>&1 1>/dev/null || { echo "curl not installed"; exit 1; }

# Normalize
[ ! -f css/normalize.min.css ] && curl -o css/normalize.min.css https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css

# Milligram
[ ! -f css/milligram.min.css ] && curl -o css/milligram.min.css https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css

