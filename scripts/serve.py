#!/usr/bin/env python3
"""Serve the research publication locally."""

import http.server
import os
import socketserver

PORT = 8080
DIR = os.path.join(os.path.dirname(__file__), "site")
os.chdir(DIR)

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
