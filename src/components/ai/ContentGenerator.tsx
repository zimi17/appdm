
import { Button } from '@sanity/ui';
import { SparklesIcon } from '@sanity/icons';
import { useCallback, useState } from 'react';
import { set, unset } from 'sanity';

export function ContentGenerator(props: any) {
  const { onChange, value = '', elementProps } = props;
  const [loading, setLoading] = useState(false);

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/flows/contentGeneratorFlow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: value }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const text = result.output;

      onChange(text ? set(text) : unset());
    } catch (error) {
      console.error('Error generating content:', error);
      // Here you could also use the Sanity toast API to show an error to the user
    } finally {
      setLoading(false);
    }
  }, [value, onChange]);

  return (
    <div>
      {props.renderDefault(props)}
      <Button
        onClick={handleGenerate}
        icon={SparklesIcon}
        text={loading ? 'Generating...' : 'Generate with Gemini'}
        mode="ghost"
        disabled={loading || !value}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
}
