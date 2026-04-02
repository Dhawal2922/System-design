export function parseSections(text: string) {
  const sections = [
    "1. Requirements",
    "2. High-Level Architecture",
    "3. Core Components",
    "4. Scaling Strategy",
    "5. Tradeoffs",
    "6. Bottlenecks",
    "7. Architecture Diagram",
    "8. Real-World Tech Stack",
  ];

  const result: Record<string, string> = {};
  let currentHeader = "";
  let buffer: string[] = [];

  const lines = text.split("\n");

  for (let line of lines) {
    const cleanLine = line.trim();
    
    // Using startsWith to avoid merging sections within text
    // We check for both the numbered header and the name only (e.g. "Requirements")
    const foundHeader = sections.find(section => {
      const sectionNameOnly = section.split(". ")[1].toLowerCase();
      const normalizedLine = cleanLine.toLowerCase();
      
      return normalizedLine.startsWith(section.toLowerCase()) || 
             normalizedLine.startsWith(sectionNameOnly);
    });

    if (foundHeader) {
      // Save previous section buffer
      if (currentHeader) {
        const key = currentHeader.replace(/^\d+\.\s*/, "");
        result[key] = buffer.join("\n").trim();
      }
      currentHeader = foundHeader;
      buffer = [];
    } else {
      buffer.push(line);
    }
  }

  // Handle the last section
  if (currentHeader) {
    const key = currentHeader.replace(/^\d+\.\s*/, "");
    result[key] = buffer.join("\n").trim();
  }

  return result;
}