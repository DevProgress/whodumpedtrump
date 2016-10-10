# Who Dumped Trump? (Redux) 💔

Built with [Jekyll](https://jekyllrb.com/) and ready for [Github Pages](https://help.github.com/articles/about-github-pages-and-jekyll/).

## Setup

 - [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
 - Run `bundle install`
 - Run `jekyll serve` to start a dev server

## Updating the Data

The data presented is pulled from [a Google Spreadsheet](https://docs.google.com/spreadsheets/d/1j75R6Lmzg1s2yD0Z7Mvu_KSHvMHbpvQ1CQQubGPFAwo/edit?usp=sharing) and stored in `_data/retractions.json`. To update the data, simply run `rake update_data`.

Note adjustments will likely need to be made if the spreadsheet format chnges.
