import shutil
import os
from csv_to_meets_html import csv_to_html


# read each csv file and output them as html files with a folder named meets html pages
def process_meets():
    Meets_List = ""
    Meets_Dir = 'meets'
    Output_Folder = 'meets_html_pages'

    if os.path.exists(Output_Folder):
        shutil.rmtree(Output_Folder)
        os.makedirs(Output_Folder, exist_ok=True)


    for filename in os.listdir(Meets_Dir):
        if filename.endswith('.csv'):
            csv_path = os.path.join(Meets_Dir, filename)
            print(f"Processing {csv_path}...")

            csv_to_html(csv_path, Output_Folder)

            meet_name = os.path.splitext(filename)[0] 
            meet_page = os.path.join(Output_Folder, meet_name +".html")
            Meets_List += f'''
            <tr><td><a href="{meet_page}">{meet_name}</a></td></tr>
            '''

    html_content = f'''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Skyline High School Cross Country Meets</title>
        <link rel="stylesheet" href="css/reset.css" >
        <link rel="stylesheet" href="css/style.css" >
     
    </head>
    <body>
    <section id="Skyline_High_School_Cross_Country_Meets">
        <h1>SKYLINE HIGH SCHOOL CROSS COUNTRY TEAM</h1>
        <h2>Home Page</h2>
        <header><h2>Past Meets</h2></header>

        <table id="Cross_Country_Meets_List">
            
            <tbody>{Meets_List}</tbody>
        </table>
    </section>
    
    <!-- Slideshow container for gallery images -->
    <section id="gallery">
        <h2>Photo Gallery</h2>
        <div id="slideshow-gallery"></div>     
    </section>
    
        <!-- Link to external JavaScript file -->
        <script src="js/gallery_slideshow.js"></script> 

    </body>
    </html>
    '''

    
    with open("index.html", 'w', encoding='utf-8') as f:
        f.write(html_content)


if __name__=="__main__":
    process_meets()