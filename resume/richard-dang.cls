\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{richard-dang}[2017/01/30 My custom CV class]
\LoadClass{article}

% --------------------------------- %
%	 		PARAMETERS 				%
% --------------------------------- %
% Size of the margin
\newlength{\margin}
\setlength{\margin}{10mm}
% Size of the left column
\newlength{\leftcol}
\setlength{\leftcol}{0.15\paperwidth}
% Height of the header
\newlength{\hdrheight}
\setlength{\hdrheight}{40mm}
% Vertical space between rows/paragraphs
\newlength{\vspacepar}
\setlength{\vspacepar}{0.2\baselineskip}
% Horizontal space before and after vertical bar (|) between address and contact details
\newlength{\hspaddress}
\setlength{\hspaddress}{1em}
% Horizontal space after font awesome icons
\newlength{\FAspace}
\setlength{\FAspace}{0.2em}

% --------------------------------- %
%	 			PACKAGES 			%
% --------------------------------- %
\RequirePackage{fontspec} % Needed to run XeLaTeX
\RequirePackage{titlesec} % To alter the style and spacing of titles
\RequirePackage{tikz} % Draw things, needed for the header
\RequirePackage{xcolor} % Enables the use of colours
\RequirePackage[margin= \margin]{geometry} % Adjust the margins of a page
\defaultfontfeatures{ % Important to add, else fontawesome will not work with XeLaTeX 
    Path = Fonts/}
\RequirePackage{fontawesome} % Load cool icons, such as the linked in logo
\RequirePackage{calc} % To calculate lengths, for example the skip after the header
\RequirePackage{tabularx} % For tables
\RequirePackage{enumitem} %Reduce spacing between items
\setlist{parsep=1 pt, topsep=1 pt} % Change item separation of lists globally
\RequirePackage{parskip} % To change \parindent and \parskip
\usepackage{hyperref}


% --------------------------------- %
%		CALCULATED LENGTHS 			%
% --------------------------------- %
% Skip after the header
\newlength{\hdrskip}
\setlength{\hdrskip}{\hdrheight-15mm}
% Width of the right column
\newlength{\rightcol}
\setlength{\rightcol}{\paperwidth-\leftcol}
% Left col without margin
\newlength{\LeftColBody}
\setlength{\LeftColBody}{\leftcol-\margin}
% Right col without margin
\newlength{\RightColBody}
\setlength{\RightColBody}{\textwidth-\LeftColBody}

% --------------------------------- %
%	 			FONTS 	 			%
% --------------------------------- %
\setmainfont{Raleway}[ 
	Path = Fonts/,
	Extension = .ttf ,
    UprightFont = *-Regular,
    ItalicFont = *-Italic,
    BoldFont = *-SemiBold,]    

\newfontfamily\titlefont{Raleway}[ 
	Path = Fonts/,
	Extension = .ttf,
	UprightFont = *-Regular,
    BoldFont = *-SemiBold,
    ItalicFont = *-Italic,
    ]        

% --------------------------------- %
%	 			COLORS	 			%
% --------------------------------- %
\definecolor{maincolor}{RGB}{66, 134, 244}
\colorlet{lightermain}{maincolor!35}
\colorlet{darkermain}{maincolor!90!black}

% --------------------------------- %
%	 			HEADER	 			%
% --------------------------------- %
\newcommand{\sep}{\hspace{\hspaddress} | \hspace{\hspaddress}}

\newcommand{\header}[5]{%
% #1 First name
% #2 Last name
% #3 Term
% #4 Program
% #5 Phone, mail, LinkedIn, website
  \begin{tikzpicture}[remember picture, overlay]
    % Colored bar on top of the page
    \node [below right, fill=darkermain, minimum height=\hdrheight, minimum width=\paperwidth, outer sep=0] (name) at (current page.north west) {};
    % Node for the name
    \node[anchor=base, text=white, inner sep=0.10 cm] (nametext) at (name.base) {%
          \fontsize{40pt}{40pt}\color{white}%
          {\titlefont \textbf{#1}~}{\titlefont \textbf{#2}\par}
          };
    % Address
    \node[anchor=north, text=white, inner sep=0.20 cm] (address) at (nametext.south)  {%
          \fontsize{12pt}{12pt}\color{white}%
          {\titlefont \textit{#3}~}{\titlefont \textit{#4}\par}
          };
    % Phone/mail/nationality
    \node[anchor=north, text=lightermain] at (address.south)  {#5};
  \end{tikzpicture}
  \vspace{\hdrskip}
} 

% --------------------------------- %
% 			TITLE FORMAT 			%
% --------------------------------- %

% Change format of the section title
\titleformat{\section}{\titlefont\color{maincolor}\huge\bfseries}{\thesection}{0em}{}
\titlespacing*{\section}{0pt}{1.5ex plus 0.2ex minus .2ex}{-0.5ex plus .2ex}

\newcommand{\worktitle}[2]{
% #1 = Job or education title 
% #2 = Company and location
    {\bfseries\MakeUppercase{#1}}\sep{\itshape #2}
}

% --------------------------------- %
% 			ENVIRONMENTS			%
% --------------------------------- %
% New environment with two columns, one narrow one on the left dates and what was done during that period in the right wider column
\newenvironment{tabularcv}{
	\tabularx{\textwidth}{@{}>{\raggedright\arraybackslash}p{\LeftColBody}@{}>{\raggedright\arraybackslash}p{\RightColBody}}}{
	\endtabularx}

% Use bullet point lists inside a tabular environment	
\newenvironment{tabitemize}{
	\itemize}{
	\vspace*{-\baselineskip}
		\enditemize}	

% --------------------------------- %
%		BODY TEXT OPTIONS			%
% --------------------------------- %		
\setlength{\parindent}{0pt}	% Remove indent at the start of a new paragraph
\setlength{\parskip}{\vspacepar} % adds extra vertical space between paragraphs	
